import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Orders/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../Checkout/ContactData/ContactData'
import { connect } from 'react-redux'

class Checkout extends Component {
    state = {
        ingredients: [],
        totalPrice:0 
    }

        

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
        console.log('tran duy linh')
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }   

    
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ingredients} 
                 checkoutCancelled={this.checkoutCancelledHandler}
                 checkoutContinued={this.checkoutContinuedHandler} />
                 <Route path={this.props.match.path + "/contact-data"}  component={ContactData} />     
            </div>
        )
    }    
} 

const mapStateToProps = (state) => {
    return {
       ingredients : state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout)