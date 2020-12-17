import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Orders/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../Checkout/ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: [],
        totalPrice:0 
    }


    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries() ) {
            if (param[0] === 'price') {
                price = param[1]
            }
            else {
            ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price })
    }

    

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
        console.log('tran duy linh')
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }   

    
    render() {
        console.log(this.state)
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} 
                 checkoutCancelled={this.checkoutCancelledHandler}
                 checkoutContinued={this.checkoutContinuedHandler} />
                 <Route path={this.props.match.path + "/contact-data"}  render={() => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...this.props} />) } />     
            </div>
        )
    }    
}
export default Checkout