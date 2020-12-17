import React, { Component } from 'react';
import classes from './Modal.css'
import Aux from '../../../hov/Aux/Aux'
import Backdrop from '../../UI/Backdrop/BackDrop'

class Modal extends Component {  
    shouldComponentUpdate(nextProps , nextSate) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children 
    }

    componentDidUpdate () {
        console.log('modal componet updated ')
    } 

    render() {
        return (
            <Aux>
                <Backdrop show = {this.props.show}  clicked={this.props.modalclose}/>
                    <div className={classes.Modal}
                style={{
                        transform: this.props.show ? 'translateX(0vh)' : 'translate(-80vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                        {this.props.children}        
                    </div>
    
            </Aux>
        )
    }


}

export default Modal