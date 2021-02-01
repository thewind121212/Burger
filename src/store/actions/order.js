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

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT,
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
            dispatch(purchaseBurgerStart())
        Axios.post('/orders.json', orderData )
             .then( response => { 
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
                 .catch( error => {
                dispatch(purchaseBurgerFail(error))
             });
    }
}

export const fetchOrderFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error,
    }
}

export const fetchOrderSucces = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders,
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

export const  fetchOrder = () => {
    return dispatch => {
        dispatch(fetchOrderStart())
             Axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key], 
                        id: key
                    }) 
                }
                dispatch(fetchOrderSucces(fetchedOrders))
                console.log(fetchedOrders)
            })            
            .catch(error => {
                dispatch(fetchOrderFail(error))
            })
       
    }
}