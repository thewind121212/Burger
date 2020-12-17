import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/Buildcontrol' 

const controls = [
    {lablel:'Salad', type:'salad'},
    {lablel:'Bacon', type:'bacon'},
    {lablel:'Cheese', type:'cheese'},
    {lablel:'Meat', type:'meat'}

];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
           return <BuildControl key={ctrl.lablel} lablel={ctrl.lablel}  add = {() => props.ingredientAdd(ctrl.type)} remove = {() => props.ingredientRemove(ctrl.type)}
                   disabled ={props.disabled[ctrl.type]}     
           />


        })}
         <button className={classes.OrderButton} disabled={props.orderAble} onClick={props.ordered}>ORDER NOW</button>  

    </div>
)

export default buildControls