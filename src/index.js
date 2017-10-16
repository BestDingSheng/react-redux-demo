import React, {Component} from 'react'
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import reducer from './reducer'
import App from './component/app.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>

  ,document.getElementById("root")
)
