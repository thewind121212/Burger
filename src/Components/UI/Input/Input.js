import React from 'react';
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement]   
    if (!props.isValid && props.touched) {
        inputClasses.push(classes.InputWrong)
    }

     inputClasses = inputClasses.join(' ')

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            className={inputClasses} 
            onChange={props.change}
             {...props.elementConfig} value={props.value} />
            break;
        case ('textarea'): 
            inputElement = <textarea 
            className={inputClasses} 
            {...props.elementConfig} 
            value={props.value} />
            break;
        case ('select'):
            inputElement = <select
                className={inputClasses}
                onChange={props.change}
                value={props.value} >
                {props.elementConfig.options.map( option => {
                    return (<option value={option.value} key={option.value} > {option.displayValue} </option>)
                } )}
            </select>
            break;
        default:
            inputElement = <input 
            className={inputClasses} 
            onChange={props.change} 
            {...props.elementConfig} 
            value={props.value}/>
        }


    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
            <ul>{props.errorMessage}</ul>
        </div>
    )
}

export default input