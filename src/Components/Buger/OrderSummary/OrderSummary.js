import React from 'react';
import Aux from '../../../hov/Aux/Aux'
import Button from '../../UI/Button/Button'

//this is not nessecery to change to class component because it was controled by modal class 

 const OrderSummary = (props) => {
        
    let ingredientSummary = Object.keys(props.ingredients).map( igKey => {
    return (<li key={igKey}>
        {igKey}: <span style={{textTransform: 'capitalize'}} > {props.ingredients[igKey]} </span> 
        </li>)
    }) 

    
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A deliceous burger with the flowing list:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total burger price without VAT: {props.price.toFixed(2)} USD </p>
            <p> Continute to Checkout ? </p>
            <Button btnType="Danger" clicked={props.purchaseRemoveHander} >CANCEL</Button>
            <Button btnType="Success" clicked={props.continuesButtonHandler} >CONTINUE</Button>
        </Aux>        
        )
  
}

export default OrderSummary