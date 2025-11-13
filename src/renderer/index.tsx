import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Declare the electronAPI on the window object
declare global {
  interface Window {
    electronAPI: {
      getAppPath: () => Promise<string>;
    };
  }
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
