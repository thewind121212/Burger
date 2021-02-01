import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Orders/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from '../Checkout/ContactData/ContactData'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'

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
        let summary = <Redirect to="/" />
        const purchasedRedirect = (this.props.purchased) ? <Redirect to="/"/> : null;
        if (this.props.ingredients) {
            summary = (
                <div>
                <CheckoutSummary ingredients={this.props.ingredients} 
                 checkoutCancelled={this.checkoutCancelledHandler}
                 checkoutContinued={this.checkoutContinuedHandler} />
                 <Route path={this.props.match.path + "/contact-data"}  component={ContactData} />     
                 </div>
                 )
        }
        return (
            <div>
            {purchasedRedirect}
                 {summary}
            </div>
        )
    }    
} 

const mapStateToProps = (state) => {
    return {
       ingredients : state.burgerBuilder.ingredients,
       purchased: state.order.purchased,
    }
}



export default connect(mapStateToProps, )(Checkout)