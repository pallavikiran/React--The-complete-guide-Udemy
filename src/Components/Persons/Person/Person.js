import React from 'react';
import classes from './Person.css';
//import styled from 'styled-components'
 

const person = (props) =>
{



    return (
        <div className={classes.perosn}>
         <p onClick={props.click}>My name is {props.name}. I am {props.age } years old.</p>
            <p>{props.children}</p>
            <input  type="text" onChange={props.changed}   value={props.name}/>
        </div>
    
    )
};

export default person;
