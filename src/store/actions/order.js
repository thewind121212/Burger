import * as actionTypes from './actionTypes'
import Axios from '../../axios-order'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}


export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}


export const purchaseBurger = (orderData) => {
    return dispatch => {
            dispatch(purchaseBurgerStart())
        Axios.post('/orders.json', orderData )
             .then( response => { 
                dispatch(purchaseBurgerSuccess(response.data, orderData))
            })
                 .catch( error => {
                dispatch(purchaseBurgerFail(error))
             });
    }
}