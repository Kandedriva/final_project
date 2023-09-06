import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './components/App';

// createRoot(<App />, document.getElementById("root"));
const rootElement = document.getElementById('root'); // Replace 'root' with your target DOM element's ID
const root = createRoot(rootElement);

// Now you can render your component within the root
root.render(<App />);

