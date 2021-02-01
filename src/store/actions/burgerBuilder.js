import * as actionTypes from './actionTypes'
import Axios from '../../axios-order'

export const addIngredient = (igName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        name : igName,
    }
}

export const removeIngredient = (igName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        name: igName,
    }
}

const setIngredients = (ig, price ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        name: ig,
        price: price,
    }
}

const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

       

export const initIngredients = () => {
    return dispatch => {
        let price =  0;
        Axios.get('https://burget-react-test.firebaseio.com/totalPrice.json')
            .then ( response => { price =  response.data})
        Axios.get('https://burget-react-test.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data, price))
                console.log(price)
            })
            .catch(error => {
                dispatch(fetchIngredientsFail())
            })
    }
}
