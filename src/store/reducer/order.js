import * as actionsTypes from '../actions/actionTypes'

const initalState = {
    orders: [],
    loading: false,

};


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_BURGER_START: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionsTypes.PURCHASE_BURGER_SUCCESS: {
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }
        }
        case actionsTypes.PURCHASE_BURGER_FAIL: {
                return {
                    ...state,
                    loading:false,
                }
        }
        default: {
            return state
        }
    }

    return state
}

export default reducer