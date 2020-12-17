import React from 'react';
import Burger from '../../Buger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}> 
            <h1>We hope it tastes well!!</h1>
            <div style={{width: '350px', height: '300px'}}>
                <Burger ingredients={props.ingredients} style={{}}/>
            </div>
            <div>
            <Button btnType="Danger" clicked={props.checkoutCancelled} >Cancel</Button>
            <Button btnType="Success"  clicked={props.checkoutContinued} >Continue</Button>
            </div>
        </div>
    )
} 

export default checkoutSummary