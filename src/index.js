import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement);

root.render(<BrowserRouter><App /></BrowserRouter>);

