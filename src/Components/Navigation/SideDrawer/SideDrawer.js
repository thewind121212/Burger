import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/BackDrop'
import Aux from '../../../hov/Aux/Aux'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]  
    if (props.show) {
        attachedClasses = [classes.SideDrawer , classes.Open]
    }
    return(
        <Aux>
        <Backdrop show={props.show} clicked={props.clicked}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>

    )
}

export default sideDrawer