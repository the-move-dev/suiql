import React, { useState } from 'react';
import { GraphiQL } from './index';
import { useExplorerPlugin } from '@graphiql/plugin-explorer';

import '@graphiql/plugin-explorer/dist/style.css';

function GraphiQLWithExplorer(props: any) {
    const [query, setQuery] = useState('Default Query');
    const explorerPlugin = useExplorerPlugin({
        query,
        onEdit: setQuery,
        showAttribution: false,
    });
    return (
        <GraphiQL
            {...props}
            query={query}
            onEditQuery={setQuery}
            plugins={[explorerPlugin]}
        />
    );
}
export default GraphiQLWithExplorer;
