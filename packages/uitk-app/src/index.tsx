import { ToolkitProvider } from '@jpmorganchase/uitk-core';
// Import UITK CSS before any component is loaded to get correct CSS order
import '@jpmorganchase/uitk-theme/index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ToolkitProvider>
      <App />
    </ToolkitProvider>
  </React.StrictMode>,
);
