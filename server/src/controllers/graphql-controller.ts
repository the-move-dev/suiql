import { parse, print, visit } from 'graphql';
import { executeCustomMesh } from 'src/core/utils/custom-mesh';
import { visitor } from 'src/core/utils/graphql-visitor';
import {
  ExecuteQueryRequest,
  ExecuteQueryResponse,
} from 'src/models/graphql-models';

export async function executeQuery(
  request: ExecuteQueryRequest
): Promise<ExecuteQueryResponse> {
  const { network } = request;
  const document = parse(request.query);
  const variables = request.variables ?? {};
  const newDocument = visitor ? print(visit(document, visitor)) : document;
  const result = await executeCustomMesh(network, newDocument, variables);
  return new ExecuteQueryResponse(result);
}
