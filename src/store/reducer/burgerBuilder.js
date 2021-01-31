import * as actionTypes from '../actions/actionTypes'


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: true,
}

const  INGREDIENTS_PRICES = {
    salad: 0.5, 
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name] : state.ingredients.[action.name] + 1
                },
                totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.name]
            }
        }
        case actionTypes.REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.name] : state.ingredients.[action.name] - 1 
                },
                totalPrice : state.totalPrice - INGREDIENTS_PRICES[action.name]
            }
        }
        case actionTypes.SET_INGREDIENTS: {
            return {
                ...state,
                ingredients: {
                    salad: action.name.salad,
                    bacon: action.name.bacon,
                    cheese: action.name.cheese,
                    meat: action.name.meat,
                },
                error: false,
            }
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED: {
            return {
                ...state,
                error: true,
            }
        }

    }
    
    
    return state
} 

export default reducer