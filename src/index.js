import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {dataSource} from './components/dataSource'
import { Provider } from 'react-redux';


const defaultStates = {
    dataSource: dataSource,
    apiData: {complited:false, data:''},
    mapData: {
        receivedCoordinate:[],
        defaultCoordinate:[59.9386, 30.3141],
        complited:false,
      }
}
const reduser = (state=defaultStates, action) => {
    switch(action.type){
        case "table render":
            return{...state, dataSource:action.paylod}
        case "get data api":
            return{...state, apiData: action.paylod }
        case "map render":
            return{...state, mapData:action.paylod}
        default:
            return state
    }
}
const store = createStore(reduser)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
