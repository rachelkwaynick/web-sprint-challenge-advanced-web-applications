//Libraries
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//redux
import { colorReducer } from './store/reducers';

//components
import App from "./App";

//stylesheets

const store = createStore(colorReducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    rootElement);
