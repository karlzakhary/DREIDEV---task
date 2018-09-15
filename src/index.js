import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import itemsReducer from './ducks/items';
import App from './App';
import itemsData from './data/items';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer
});

let store = createStore(
    rootReducer,
    {
        items: itemsData // Our locally saved database
    },
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
