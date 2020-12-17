import React from 'react';
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} 
            onChange={props.change}
             {...props.elementConfig} value={props.value} />
            break;
        case ('textarea'): 
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value} />
            break;
        case ('select'):
            inputElement = <select
                className={classes.InputElement}
                onChange={props.change}
                value={props.value}
            >
                {props.elementConfig.options.map( option => {
                    return (<option value={option.value} key={option.value} > {option.displayValue} </option>)
                } )}
            </select>
            break;
        default:
            inputElement = <input className={classes.InputElement} onChange={props.change} {...props.elementConfig} value={props.value}/>
        }
    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input