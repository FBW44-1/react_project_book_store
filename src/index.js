import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { BookStoreProvider } from './context';



ReactDOM.render(
    
    <React.StrictMode>
        
        <BookStoreProvider>
            <Router>
                <App />
            </Router>
        </BookStoreProvider>
        
    </React.StrictMode>
    
    , document.getElementById('root')
);
