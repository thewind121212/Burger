import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose } from 'redux'
import reducer from './store/reducer/reducer'
import { Provider } from 'react-redux'





const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  
  )


const app = (
  <Provider store={store}>
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  </Provider>

)

ReactDOM.render(
  <div> 
  {app}
  </div>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
