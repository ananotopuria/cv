import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './app/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import server from './services/server';

server();

library.add(faBars, faTimes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
