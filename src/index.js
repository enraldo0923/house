import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';
import { RootContext } from './contex/intex';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RootContext>
     <Root/>
    </RootContext>
    </BrowserRouter>
    </React.StrictMode>
)

