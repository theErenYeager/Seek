import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ResultContextProvider } from './contexts/ResultsContextProvider';
import App from './App';
import './global.css';

ReactDOM.render(
    <ResultContextProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter> 
    </ResultContextProvider>,
    document.getElementById('root'))