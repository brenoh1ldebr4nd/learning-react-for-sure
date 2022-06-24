import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
// rootElement.innerHTML = '<h1>Hello World!</h1>';

const root = ReactDOM.createRoot(rootElement);

root.render(<h1>Hello React!</h1>);