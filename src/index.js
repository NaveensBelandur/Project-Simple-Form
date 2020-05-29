import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {StartgetUserAccount} from './action/userAction'
import configueStore from './store/config'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

const store = configueStore()

if(localStorage.getItem('token')){
    store.dispatch(StartgetUserAccount(localStorage.getItem('token')))
    
   
  }
  

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(jsx,document.getElementById('root'))

