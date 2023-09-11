import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';




import './index.css';
import App from './components/App';

// createRoot(<App />, document.getElementById("root"));
const rootElement = document.getElementById('root'); // Replace 'root' with your target DOM element's ID
const root = createRoot(rootElement);

// Now you can render your component within the root
root.render(<BrowserRouter><App /></BrowserRouter>);

