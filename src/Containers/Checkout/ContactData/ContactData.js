import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button'
import classes from '../../Checkout/ContactData/ContactData.css'
import Axios from '../../../axios-order'
import Spiner from '../../../Components/UI/Spinner/Spinner' 
import Input from '../../../Components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
                name : {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                        },
                        value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                        },
                        value: ''
                },
                zipCode : {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP CODE'
                        },
                        value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                        },
                        value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your Email'
                        },
                        value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [ {value: 'fastest', displayValue: 'Fastest'},
                                    {value:'cheapest', displayValue: 'Cheapest'}    
                                 ]
                    },
                        value: ''
                }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
         this.setState({loadding: false})
         let formData = {}
         for (let key in this.state.orderForm) {
             formData[key] = this.state.orderForm[key].value
         }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData : formData
        }

        console.log(order)

         Axios.post('/orders.json', order )
             .then( response => {this.setState({loadding: false}) 
                                 this.props.history.push('/')
                              })
             .catch( error => {this.setState({loadding: false})    
                             });
    }

    inputChangeHandler = (event, input) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFromElement =  {
            ...updatedOrderForm[input]
        }
        updatedFromElement.value = event.target.value 
        updatedOrderForm[input] = updatedFromElement
        this.setState({orderForm:updatedOrderForm}) 
    }

    render() {
        const formElementsArray = []
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key] 
            })
        }
        let form = (<form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => {
                        return (<Input  key={formElement.id}
                                        elementType={formElement.config.elementType} 
                                        value={formElement.config.value} 
                                        elementConfig={formElement.config.elementConfig} 
                                        change={(event) => this.inputChangeHandler(event, formElement.id)} />)
                    })} 
                    <Button btnType="Success"  > ORDER </Button>
                </form>)
        if (this.state.loadding) {
            form = (<Spiner/>)
        }
        return (
            <div className={classes.ContactData}>
                <h4> Enter your contact data </h4>
                    {form}
            </div>
        )
    }

}

export default ContactData