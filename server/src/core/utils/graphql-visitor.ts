import { FieldNode, Visitor, ASTKindToNode } from 'graphql';

const queryLimit = process.env.QUERY_LIMIT
  ? parseInt(process.env.QUERY_LIMIT, 10)
  : 1000;

// visit every selection in the document and add a "first" argument with value queryLimit
export const visitor: Visitor<ASTKindToNode> = {
  Field(node: FieldNode) {
    const shouldAddFirstArgument =
      node.arguments?.every((arg) => arg.name.value !== 'first') ?? true;
    let newArguments;
    if (shouldAddFirstArgument) {
      newArguments = [
        ...(node.arguments || []),
        {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: 'first',
          },
          value: {
            kind: 'IntValue',
            value: queryLimit.toString(),
          },
        },
      ];
    } else {
      newArguments = node.arguments?.map((arg) => {
        if (
          arg.name.value === 'first' &&
          arg.value.kind === 'IntValue' &&
          parseInt(arg.value.value, 10) > queryLimit
        ) {
          return {
            ...arg,
            value: {
              kind: 'IntValue',
              value: queryLimit.toString(),
            },
          };
        }
        return arg;
      });
    }
    return {
      ...node,
      arguments: newArguments,
    };
  },
};
