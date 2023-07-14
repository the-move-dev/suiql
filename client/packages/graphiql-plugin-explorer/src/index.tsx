import {
  GraphiQLPlugin,
  useEditorContext,
  useExecutionContext,
  useSchemaContext,
} from '@graphiql/react';
import GraphiQLExplorer, { GraphiQLExplorerProps } from 'graphiql-explorer';
import React, { useRef } from 'react';

import './graphiql-explorer.d.ts';
import './index.css';

function ExplorerPlugin(props: GraphiQLExplorerProps) {
  const { setOperationName } = useEditorContext({ nonNull: true });
  const { schema } = useSchemaContext({ nonNull: true });
  const { run } = useExecutionContext({ nonNull: true });

  return (
    <GraphiQLExplorer
      schema={schema}
      onRunOperation={operationName => {
        if (operationName) {
          setOperationName(operationName);
        }
        run();
      }}
      explorerIsOpen
      colors={{
        keyword: 'hsl(var(--color-primary))',
        def: 'hsl(var(--color-tertiary))',
        property: 'hsl(var(--color-info))',
        qualifier: 'hsl(var(--color-secondary))',
        attribute: 'hsl(var(--color-tertiary))',
        number: 'hsl(var(--color-success))',
        string: 'hsl(var(--color-warning))',
        builtin: 'hsl(var(--color-success))',
        string2: 'hsl(var(--color-secondary))',
        variable: 'hsl(var(--color-secondary))',
        atom: 'hsl(var(--color-tertiary))',
      }}
      arrowOpen={
        <svg
          viewBox="0 -4 13 15"
          style={{
            color: 'hsla(var(--color-neutral), var(--alpha-tertiary, 0.4))',
            marginRight: 'var(--px-4)',
            height: 'var(--px-16)',
            width: 'var(--px-16)',
          }}
        >
          <path
            d="M3.35355 6.85355L6.14645 9.64645C6.34171 9.84171 6.65829 9.84171 6.85355 9.64645L9.64645 6.85355C9.96143 6.53857 9.73835 6 9.29289 6L3.70711 6C3.26165 6 3.03857 6.53857 3.35355 6.85355Z"
            fill="currentColor"
          />
        </svg>
      }
      arrowClosed={
        <svg
          viewBox="0 -2 13 15"
          style={{
            color: 'hsla(var(--color-neutral), var(--alpha-tertiary, 0.4))',
            marginRight: 'var(--px-4)',
            height: 'var(--px-16)',
            width: 'var(--px-16)',
          }}
        >
          <path
            d="M6.35355 11.1464L9.14645 8.35355C9.34171 8.15829 9.34171 7.84171 9.14645 7.64645L6.35355 4.85355C6.03857 4.53857 5.5 4.76165 5.5 5.20711V10.7929C5.5 11.2383 6.03857 11.4614 6.35355 11.1464Z"
            fill="currentColor"
          />
        </svg>
      }
      checkboxUnchecked={
        <svg
          viewBox="0 0 15 15"
          style={{
            color: 'hsla(var(--color-neutral), var(--alpha-tertiary, 0.4))',
            marginRight: 'var(--px-4)',
            height: 'var(--px-16)',
            width: 'var(--px-16)',
          }}
        >
          <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" fill="none" />
        </svg>
      }
      checkboxChecked={
        <svg
          viewBox="0 0 15 15"
          style={{
            color: 'hsl(var(--color-info))',
            marginRight: 'var(--px-4)',
            height: 'var(--px-16)',
            width: 'var(--px-16)',
          }}
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" />
          <path
            d="M4.64641 7.00106L6.8801 9.23256L10.5017 5.61325"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      }
      styles={{
        buttonStyle: {
          backgroundColor: 'transparent',
          border: 'none',
          color: 'hsla(var(--color-neutral), var(--alpha-secondary, 0.6))',
          cursor: 'pointer',
          fontSize: '1em',
        },
        explorerActionsStyle: {
          padding: 'var(--px-8) var(--px-4)',
        },
        actionButtonStyle: {
          backgroundColor: 'transparent',
          border: 'none',
          color: 'hsla(var(--color-neutral), var(--alpha-secondary, 0.6))',
          cursor: 'pointer',
          fontSize: '1em',
        },
      }}
      {...props}
    />
  );
}

export function useExplorerPlugin(props: GraphiQLExplorerProps) {
  const propsRef = useRef(props);
  propsRef.current = props;

  const pluginRef = useRef<GraphiQLPlugin>();
  pluginRef.current ||= {
    title: 'GraphiQL Explorer',
    icon: () => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="#110A20"/>
            <path d="M15 24H18H19.5465C19.9662 24 20.176 24 20.3788 24.0425C20.4482 24.057 20.5167 24.0752 20.5842 24.097C20.7813 24.1607 20.9635 24.2648 21.3279 24.4731V24.4731C22.4807 25.1318 23.0571 25.4612 23.6817 25.5278C23.8933 25.5504 24.1067 25.5504 24.3183 25.5278C24.9429 25.4612 25.5193 25.1318 26.6721 24.4731V24.4731C27.0365 24.2648 27.2187 24.1607 27.4158 24.097C27.4833 24.0752 27.5518 24.057 27.6212 24.0425C27.824 24 28.0338 24 28.4535 24H30H33V28C33 29.8856 33 30.8284 32.4142 31.4142C31.8284 32 30.8856 32 29 32H19C17.1144 32 16.1716 32 15.5858 31.4142C15 30.8284 15 29.8856 15 28V24Z" stroke="#666571" strokeWidth="2"/>
            <path d="M15 26V23.3333C15 22.6725 15 22.3421 15.1026 22.0342C15.2053 21.7263 15.4035 21.462 15.8 20.9333L18.3 17.6C18.8889 16.8149 19.1833 16.4223 19.6056 16.2111C20.0279 16 20.5186 16 21.5 16H26.5C27.4814 16 27.9721 16 28.3944 16.2111C28.8167 16.4223 29.1111 16.8149 29.7 17.6L32.2 20.9333C32.5965 21.462 32.7947 21.7263 32.8974 22.0342C33 22.3421 33 22.6725 33 23.3333V26" stroke="#666571" strokeWidth="2"/>
            <path d="M21 19H27" stroke="#666571" strokeLinecap="round"/>
            <path d="M19 21H29" stroke="#666571" strokeLinecap="round"/>
            <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" stroke="#231B31"/>
            <defs>
                <clipPath id="clip0_218_11230">
                    <rect width="24" height="24" fill="white" transform="translate(12 12)"/>
                </clipPath>
            </defs>
        </svg>
    ),
    content: () => <ExplorerPlugin {...propsRef.current} />,
  };
  return pluginRef.current;
}
