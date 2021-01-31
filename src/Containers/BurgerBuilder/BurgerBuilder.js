import React, { Component } from 'react';
import Aux from '../../hov/Aux/Aux'
import Burger from '../../Components/Buger/Burger'
import BuildControls from '../../Components/Buger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import SummaryOrder from '../../Components/Buger/OrderSummary/OrderSummary'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandler from '../../hov/WrapErrorHandler/WrapErrorHandler'
import { connect } from 'react-redux'
import * as burgerBuilderAction from '../../store/actions/index'
import Axios from '../../axios-order'
const  INGREDIENTS_PRICES = {
    salad: 0.5, 
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

class BurgerBuilder extends Component {


    state = {
        ingredients: null,
        toatalPrice : 4,
        Orderable : false,
        purchasing: false,
        loadding: false
        
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseRemoveHander = () => {
        this.setState({purchasing: false})
    }

    componentDidMount() {
        this.props.initStateForIngredients()  
    }



    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCounted = oldCount
        if (oldCount < 1 ) {return} 
        else {  updatedCounted = oldCount - 1}
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.toatalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({toatalPrice: newPrice, ingredients: updatedIngredients })
    }


    render() {
        

        const disabledInfo = {
            ...this.props.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        

        let orderSummary = null
        

        let burger = <Spinner/>

        if (this.props.ingredients) {
           
        orderSummary = <SummaryOrder ingredients = {this.props.ingredients}  
        continuesButtonHandler = {this.purchaseContinueHandler}
        purchaseRemoveHander = {this.purchaseRemoveHander}                
        price = {this.props.toatalPrice}
        />
        let    orderAble = Object.keys(this.props.ingredients).map( igKey => {
             return this.props.ingredients[igKey]
        }).reduce((first, second) => {
            return first + second

        })

        let    checkOrderAble = orderAble === 0 ;
        burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls 
                    ingredientAdd  = {this.props.addIngredientHandler} 
                    ingredientRemove = {this.props.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.props.toatalPrice}
                    orderAble = {checkOrderAble}
                    ordered = {this.purchaseHandler}
                />
               </Aux>
            )
        }

        if (this.state.loadding) {
            orderSummary = <Spinner/>
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalclose={this.purchaseRemoveHander}> 
                    {orderSummary}
                </Modal>
                {burger}
                
            </Aux>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        ingredients : state.burgerBuilder.ingredients,
        toatalPrice : state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredientHandler : (type) => dispatch(burgerBuilderAction.addIngredient(type)),
        removeIngredientHandler : (type) => dispatch(burgerBuilderAction.removeIngredient(type)),
        initStateForIngredients : () => dispatch(burgerBuilderAction.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, Axios)) ;