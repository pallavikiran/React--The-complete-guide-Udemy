import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';



class App extends Component {

state= {
  persons: [
    {id: 'sdf' ,name: "Pallavi" ,age:"28"},
    {id: 'tty',name: "Abhishek Singh" ,age:"31"},
    {id: 'hhg',name: "Siddharth" ,age:"45"}
  ],

  showPersons: false
}

deleteNameHandler=(personIndex)=>
{
  const persons= this.state.persons.slice();
  persons.splice(personIndex,1);
  this.setState({persons:persons});

}


 changeNameHandler= (event,id)=>
{
 const personindex= this.state.persons.findIndex(p=>{
  return p.id===id;

 }
 );

 const person= {
   ...this.state.persons[personindex]
 };

person.name=event.target.value;
const persons= [...this.state.persons];
persons[personindex]=person;
this.setState({persons : persons});
};


  

  togglePersonHandler=()=>{
const doesShow= this.state.showPersons;
  this.setState({showPersons : !doesShow})
  }

render(){ 

  let persons = null;
  
if(this.state.showPersons)
    {
persons= <Persons
  persons={this.state.persons}
  clicked={this.deleteNameHandler}
  changed= {this.changeNameHandler} />

}
  
return (  
    
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}  
        persons={this.state.persons}
        clicked ={this.togglePersonHandler}/>
        {persons}
      </div>
      );

 // return React.createElement('div', {className: "App"}, React.createElement('h1',null,'Hiiiii guys!!!') );
  
    }
}

export default App;




