import * as actionsTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initalState = {
    orders: [],
    loading: false,
    purchased: false,

};


//puschaseBurgerStart
const purchaseBurgerStart = (state, action) => {
    return updateObject(state,{loading:true})
}

//purchaseBurgerSuccess
const purchaseBurgerSuccess = (state, action) => {
    return updateObject(state, {loading: false, purchased: true,})
}

//purchaseBurgerFail 
const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading:false})
}

//fetchIngredientsInit 
const fetchIngredientsInit = (state, action) => {
    return updateObject(state,{purchased: false})
}

//fetchIngredientsfailed
const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {loading: true})
}

//fetchIngredientStart 
const fetchIngredientsStart = (state, action) => {
    return updateObject(state, {loading:true,})
}

//fetchIngredientStart
const fetchIngredientsSuccess = (state, action) => {
    return updateObject(state, {orders:action.orders, loading:false,})
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_BURGER_START: {return purchaseBurgerStart(state, action)}
        case actionsTypes.PURCHASE_BURGER_SUCCESS: {return purchaseBurgerSuccess(state, action)} 
        case actionsTypes.PURCHASE_BURGER_FAIL: {return purchaseBurgerFail(state, action)}
        case actionsTypes.PURCHASE_INIT: {return fetchIngredientsInit(state, action)}
        case actionsTypes.FETCH_INGREDIENTS_FAILED: {return fetchIngredientsFailed(state, action)}
        case actionsTypes.FETCH_ORDER_START: {return fetchIngredientsStart(state, action)}
        case actionsTypes.FETCH_ORDER_SUCCESS: {return fetchIngredientsSuccess(state, action)}
        default: {
            return state
        }
    }
}

export default reducer