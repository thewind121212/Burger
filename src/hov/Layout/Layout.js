import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import Sidedrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component  {
    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler = () => {
            this.setState({showSideDrawer:false})
        }

    sideDrawerOpenHandler = () => {
            this.setState((prevState) => {  
                return    {showSideDrawer: !this.state.showSideDrawer}
            })    
    }
    render() {
     return (
    <Aux>
     <Toolbar showToggle = {this.sideDrawerOpenHandler}/>   
        <Sidedrawer show={this.state.showSideDrawer} clicked={this.sideDrawerCloseHandler} />
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
    )
    }

}

export default Layout;