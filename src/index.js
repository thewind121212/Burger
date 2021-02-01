import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import burgerBuilderReducer from './store/reducer/burgerBuilder'
import { Provider } from 'react-redux'
import orderReducer from './store/reducer/order'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer
})




const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))

  
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
