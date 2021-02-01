import React, {Component} from 'react'
import Order from '../../Components/Orders/Order'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../Components/UI/Spinner/Spinner'

class Orders extends Component {
    state = {
        orders : null, 
        loading: true
    }

        
    componentDidMount() {
        this.props.onOrderFetch()
    }
   
    
            
    render () {
            let orderRender = <Spinner/>;
            if (!this.props.loading) {
                orderRender = this.props.orders.map(order => {return <Order key={order.id} price={order.price} ingredients={order.ingredients} />})
            }
        return (
            <div>
                {orderRender}       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderFetch: () => dispatch(actions.fetchOrder())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders)