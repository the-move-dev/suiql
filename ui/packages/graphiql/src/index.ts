/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/**
 * GraphiQL
 */
import TagManager from 'react-gtm-module';
export { GraphiQLProvider } from '@graphiql/react';

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_TAG_MANAGER_TOKEN!
}
TagManager.initialize(tagManagerArgs)

/**
 * Definitions
 */
export type {
  GraphiQLProps,
  GraphiQLInterfaceProps,
} from './components/GraphiQL';
export type { GraphiQLProviderProps } from '@graphiql/react';

export {
  GraphiQLInterface,
  GraphiQL,
  GraphiQL as default,
} from './components/GraphiQL';
