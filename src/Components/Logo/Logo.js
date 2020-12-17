import React from 'react';
import BugerLogo from '../../Assest/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => {
    return (
         <div className={classes.Logo}>
             <img src={BugerLogo} alt="MyBurger" />
         </div>   
    )
}

export default logo