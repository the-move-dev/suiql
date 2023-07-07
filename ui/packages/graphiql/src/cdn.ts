/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import * as GraphiQLReact from '@graphiql/react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import * as GraphQL from 'graphql';
import { GraphiQL } from './components/GraphiQL';
import GraphiQLWithExplorer from './WithExplorer';

import '@graphiql/react/font/roboto.css';
import '@graphiql/react/font/fira-code.css';
import '@graphiql/react/dist/style.css';
import './style.css';

/**
 * For the CDN bundle we add some static properties to the component function
 * so that they can be accessed in the inline-script in the HTML file.
 */

/**
 * This function is needed in order to easily create a fetcher function.
 */
// @ts-expect-error
GraphiQL.createFetcher = createGraphiQLFetcher;

/**
 * We also add the complete `graphiql-js` exports so that this instance of
 * `graphiql-js` can be reused from plugin CDN bundles.
 */
// @ts-expect-error
GraphiQL.GraphQL = GraphQL;

/**
 * We also add the complete `@graphiql/react` exports. These will be included
 * in the bundle anyways since they make up the `GraphiQL` component, so by
 * doing this we can reuse them from plugin CDN bundles.
 */
// @ts-expect-error
GraphiQL.React = GraphiQLReact;

// @ts-expect-error
GraphiQL.GraphiQLWithExplorer = GraphiQLWithExplorer;

// Parse the search string to get url parameters.
const parameters: any = {};
window.location.search
    .slice(1)
    .split('&')
    .forEach(function (entry) {
        const eq = entry.indexOf('=');
        if (eq >= 0) {
            parameters[decodeURIComponent(entry.slice(0, eq))] = decodeURIComponent(
                entry.slice(eq + 1),
            );
        }
    });

// When the query and variables string is edited, update the URL bar so
// that it can be easily shared.
function onEditQuery(newQuery: any) {
    parameters.query = newQuery;
    updateURL();
}

function onEditVariables(newVariables: any) {
    parameters.variables = newVariables;
    updateURL();
}

function onEditHeaders(newHeaders: any) {
    parameters.headers = newHeaders;
    updateURL();
}

function onTabChange(tabsState: any) {
    const activeTab = tabsState.tabs[tabsState.activeTabIndex];
    parameters.query = activeTab.query;
    parameters.variables = activeTab.variables;
    parameters.headers = activeTab.headers;
    updateURL();
}

function updateURL() {
    const newSearch =
        '?' +
        Object.keys(parameters)
            .filter(function (key) {
                return Boolean(parameters[key]);
            })
            .map(function (key) {
                return (
                    encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key])
                );
            })
            .join('&');
    history.replaceState(null, 'null', newSearch);
}

function updateEndpoint(value: any) {
  renderApplication(value)
}

function renderApplication(currentEndpoint = 'testnet') {
  ReactDOM.render(
    // @ts-expect-error
    React.createElement(GraphiQL.GraphiQLWithExplorer, {
      // @ts-expect-error
      fetcher: GraphiQL.createFetcher({
        url: `https://api.suiql.com/graphql/${currentEndpoint}`,
        subscriptionUrl: 'ws://localhost:8081/subscriptions',
      }),
      query: parameters.query,
      variables: parameters.variables,
      headers: parameters.headers,
      defaultHeaders: parameters.defaultHeaders,
      onEditQuery,
      onEditVariables,
      onEditHeaders,
      updateEndpoint,
      defaultEditorToolsVisibility: true,
      isHeadersEditorEnabled: false,
      shouldPersistHeaders: true,
      inputValueDeprecation: true,
      onTabChange,
    }),
    document.getElementById('graphiql'),
  );
}

renderApplication()

export default GraphiQL;
