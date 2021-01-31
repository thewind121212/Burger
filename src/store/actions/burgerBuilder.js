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

const setIngredients = (ig) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        name: ig,
    }
}

const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

export const initIngredients = () => {
    return dispatch => {
        Axios.get('https://burget-react-test.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFail())
            })
    }
}
