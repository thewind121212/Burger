import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems' 
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

const toolBar = (props) => {
    return (
        <header className={classes.Toolbar}>
             <SideDrawerToggle cliked = {props.showToggle} />
                <div className={classes.Logo}>
                    <Logo />
                </div>
            <nav className={classes.DesktopOnly}>
               <NavigationItems /> 
            </nav>
        </header>
    )
}

export default toolBar