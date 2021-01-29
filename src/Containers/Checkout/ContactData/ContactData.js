import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button'
import classes from '../../Checkout/ContactData/ContactData.css'
import Axios from '../../../axios-order'
import Spiner from '../../../Components/UI/Spinner/Spinner' 
import Input from '../../../Components/UI/Input/Input'
import { connect } from 'react-redux'

class ContactData extends Component {
    state = {
        orderForm: {
                name : {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                        },
                        value: '',
                        validation: {
                            required: true,
                            maxLength: true
                        },
                        validationRule: {
                            maxLength : 8
                        },
                        validationMessage: {
                            required: 'The input is empty',
                            maxLength: 'the input is too short at least 8 word'
                        },
                        valid: false,
                        touched: false,

                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        validationRule: {
                            maxLength : 8
                        },
                        validationMessage: {
                            required: 'The input is empty',
                            maxLength: 'the input is too short at least 8 word'
                        },
                        valid: false,
                        touched: false,
                },
                zipCode : {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP CODE'
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        validationRule: {
                            maxLength : 8
                        },
                        validationMessage: {
                            required: 'The input is empty',
                            maxLength: 'the input is too short at least 8 word'
                        },
                        valid: false,
                        touched: false,
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                        },
                        validation: {
                            required: true
                        },
                        validationRule: {
                            maxLength : 8
                        },
                        validationMessage: {
                            required: 'The input is empty',
                            maxLength: 'the input is too short at least 8 word'
                        },
                        value: '',
                        valid: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your Email'
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        validationRule: {
                            maxLength : 8
                        },
                        validationMessage: {
                            required: 'The input is empty',
                            maxLength: 'the input is too short at least 8 word'
                        },
                        valid: false,
                        touched: false,
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [ {value: 'fastest', displayValue: 'Fastest'},
                                    {value:'cheapest', displayValue: 'Cheapest'}    
                                 ]
                    },
                        value: '',
                        validation: {
                            required: true
                        },
                        validationMessage: {
                            required: 'The input is empty',
                            maxLength: 'the input is too short at least 8 word'
                        },
                        valid: true,
                        touched: false,
                }
        },
        loading: false,
        formIsValid: false, 
    }


          errorMessage = [];
          errorDisplay = null;
    
          validationForm(input) {
           let isValid = false;
        if (input.validation.required) {
            isValid = input.value.trim() !== "";
            (!isValid) ? this.errorMessage.push(input.validationMessage.required) : console.log(input.value);
            if(input.validation.maxLength) {
                isValid = input.value.trim().length >= 8;
                (!isValid) ? this.errorMessage.push(input.validationMessage.maxLength) : console.log('123')
            }
        }        
        this.errorDisplay = this.errorMessage.map(error => {
            return <li>{error}</li> 
        })
        return isValid
    }          


    orderHandler = (event) => {
        event.preventDefault()
         this.setState({loadding: true})
         let formData = {}
         for (let key in this.state.orderForm) {
             formData[key] = this.state.orderForm[key].value
         }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData : formData
        }


         Axios.post('/orders.json', order )
             .then( response => {this.setState({loadding: false}) 
                                 this.props.history.push('/')
                              })
             .catch( error => {this.setState({loadding: false})    
                             });
    }

    inputChangeHandler = (event, input) => {
       
        this.errorMessage = []
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFromElement =  {
            ...updatedOrderForm[input]
        }

        updatedFromElement.touched = true;
        updatedFromElement.value = event.target.value 
        updatedOrderForm[input] = updatedFromElement
        updatedFromElement.valid = this.validationForm(updatedFromElement)
        let formValid = true;
        for (input in updatedOrderForm) {
            formValid = updatedOrderForm[input].valid && formValid
        }
        this.setState({orderForm:updatedOrderForm, formIsValid: formValid}) 
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
                                        change={(event) => this.inputChangeHandler(event, formElement.id)} 
                                        isValid={formElement.config.valid}
                                        touched={formElement.config.touched}
                                        errorMessage={this.errorDisplay} />)
                    })} 
                    <Button btnType="Success" disabled={!this.state.formIsValid} > ORDER </Button>
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

const mapStateToProps = (state) => {
    return {
        ingredients : state.ingredients
    }
}

export default connect(mapStateToProps)(ContactData)