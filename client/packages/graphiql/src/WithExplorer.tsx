import React, { useState } from 'react';
import { GraphiQL } from './pages/GraphiQL';
import { useExplorerPlugin } from '@graphiql/plugin-explorer';

import '@graphiql/plugin-explorer/dist/style.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { AboutUs } from "./pages/AboutUs/AboutUs";

function GraphiQLWithExplorer(props: any) {
    const [query, setQuery] = useState('Default Query');
    const explorerPlugin = useExplorerPlugin({
        query,
        onEdit: setQuery,
        showAttribution: false,
    });
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <GraphiQL
                            {...props}
                            query={query}
                            onEditQuery={setQuery}
                            plugins={[explorerPlugin]}
                        />
                    }
                />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </HashRouter>
    );
}
export default GraphiQLWithExplorer;
