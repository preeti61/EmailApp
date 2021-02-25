import React from 'react'
import App from './app.js';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
    </Provider>,
    document.getElementById('root'));
