import React from 'react';
import Layout from './hov/Layout/Layout'
import Checkout from './Containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Order from './Containers/Orders/Orders'

function App() {
  return (
    <div className="App">
      <Layout> 
        <Switch>
         <Route path="/checkout"  component={Checkout}/>
         <Route path="/orders"component={Order}  />
         <Route path="/" component ={BurgerBuilder} /> 
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
