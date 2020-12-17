import React from 'react';
import classes from './BackDrop.css';

const backdrop  = props => {
 return    props.show  ? <div className={classes.BackDrop} clicked={props.modalClosed} onClick={props.clicked}> </div> : null

};

export default backdrop;