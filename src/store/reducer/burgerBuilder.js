import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'


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
//add ingredients reducer
const addIngredient = (state, action) => {
      const updatedIngredient = {[action.name] : state.ingredients.[action.name] + 1}
      const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
      const updateState = {
                ingredients: updatedIngredients,
                totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.name]
            }
     return updateObject(state, updateState)
}

//remove ingredients reducer
const removeIngredient = (state, action) => {
      const updatedIngredient = {[action.name] : state.ingredients.[action.name] - 1}
      const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
      const updateState = {
                ingredients: updatedIngredients,
                totalPrice : state.totalPrice - INGREDIENTS_PRICES[action.name]
            }
     return updateObject(state, updateState)
}

//fetchIngredientsFail
const fetchIngredientsFail = (state, action) => {
    return updateObject(state,{error:true})
}

//setIngredients
const setIngredients = (state, action) => {
    return updateObject(state, {ingredients: {
                    salad: action.name.salad,
                    bacon: action.name.bacon,
                    cheese: action.name.cheese,
                    meat: action.name.meat,
                },
                error: false,
                totalPrice: 4,})
}



//reducer 
const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state,action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionTypes.SET_INGREDIENTS: {return setIngredients(state,action)}
        case actionTypes.FETCH_INGREDIENTS_FAILED: {fetchIngredientsFail(state, action)}
        default: {
            return state
        }
    }
    
    
} 

export default reducer