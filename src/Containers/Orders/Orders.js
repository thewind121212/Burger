import React, {Component} from 'react'
import Order from '../../Components/Orders/Order'
import axios from '../../axios-order'

class Orders extends Component {
    state = {
        orders : null, 
        loading: true
    }

        
    componentDidMount() {
            axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key], 
                        id: key
                    }) 
                }
                this.setState({loading:false, orders:fetchedOrders})
            })            
            .catch(error => {
              this.setState({loading:false})  
            })
    }
   
    
            
    render () {
            let orderRender = null;
        if (this.state.orders !== null) {
            orderRender = this.state.orders.map(order => {return <Order key={order.id} price={order.price} ingredients={order.ingredients} />})
        }
        return (
            <div>
                {orderRender}       
            </div>
        )
    }
}

export default Orders