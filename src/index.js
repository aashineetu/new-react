import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

// Log the initial state
console.log('Initial state: ', store.getState())

// store.dispatch({
//   type: 'ADD_TASK',
//   payload: { color: 'red', changeType: 'added' }
// })
// console.log('after dispatching state: ', store.getState())

// const task = { color: 'blue', changeType: 'again added' };
// store.dispatch(addTask(task));
// console.log('after dispatching state using addtask: ', store.getState())

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}> {/* HERE */}
        <BrowserRouter>

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
