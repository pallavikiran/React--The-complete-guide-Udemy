import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props)=>
{
const assignedClasses=[];

let btnclass='';
if(props.showPersons){
    btnclass=classes.red;
}

if(props.persons.length<=2){
    assignedClasses.push(classes.red);
}

if(props.persons.length<=2){
    assignedClasses.push(classes.red);
}

if(props.persons.length<=1){
    assignedClasses.push(classes.bold);
}
    return(
        <div className= {classes.Cockpit}>
        <h1>Hi, I am React App!</h1>
        <p className={assignedClasses.join(' ')}>I am created by Pallavi :)</p>
     <button
        className= {btnclass}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;