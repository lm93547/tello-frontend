import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import configureStore from "./redux/store"
import history from './utils/history';
import { BrowserRouter } from "react-router-dom";

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
