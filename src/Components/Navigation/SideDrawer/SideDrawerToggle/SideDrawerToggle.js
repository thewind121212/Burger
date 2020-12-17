import React from 'react';
import classes from './SideDrawerToggle.css'

const sideDrawerToggle = (props) => {
    return(
        <div onClick={props.cliked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default sideDrawerToggle;