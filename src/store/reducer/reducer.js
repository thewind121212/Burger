import { act } from 'react-dom/test-utils'
import * as actionTypes from '../actions/actions'


const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0,
    },
    totalPrice: 4
}

const  INGREDIENTS_PRICES = {
    salad: 0.5, 
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT : {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name] : state.ingredients.[action.name] + 1
                },
                totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.name]
            }
        }
        case actionTypes.REMOVE_INGREDIENT : {
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.name] : state.ingredients.[action.name] - 1 
                },
                totalPrice : state.totalPrice - INGREDIENTS_PRICES[action.name]
            }
        }
    }
    
    
    return state
} 

export default reducer