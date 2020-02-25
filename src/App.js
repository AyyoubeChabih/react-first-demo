import React, { Component } from 'react';
// import React, { useState } from "react";
import './App.css';
//import Radium from 'radium';
import Person from './Person/Person';
//import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? 'red' : '#8f2d56')};
//   color: white;
//   padding: 8px;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.alt ? 'salmon' : '#693048')};
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: '1s2qd4s2d', name: 'Ayyoube', age: 22 },
      { id: '21dsq1ds2', name: 'Daiki', age: 23 },
      { id: 'sdfsdf4q5' + 2, name: 'Dragon', age: 23 }
    ],
    otherState: 'some text'
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    // const style = {
    //   backgroundColor: '#8F2D56',
    //   color: 'white',
    //   padding: '8px',
    //   border: 'none',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: '#693048'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "dragon")}
            changed={this.nameChangedHandler}
          >
            Aomine
          </Person> */}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');

    // return (
    //   <div className="App">
    //     <h1 className={classes.join(' ')}>This is my first app</h1>
    //     <StyledButton
    //       alt={this.state.showPersons}
    //       onClick={this.togglePersonsHandler}
    //     >
    //       Show Persons
    //     </StyledButton>
    //     {persons}
    //   </div>
    // );

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>This is my first app</h1>
        <button className="button" onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "This is the end")
    // );
  }
}

export default App;

// HOOK

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Ayyoube", age: 22 },
//       { name: "aomine", age: 23 }
//     ]
//     // otherState: "some text"
//   });

//   // Multiple useState
//   const [otherState, serOtherState] = useState("other State");

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Ayyoube", age: 22 },
//         { name: "daiki", age: 23 }
//       ]
//       //otherState: personsState.otherState
//     });

//     console.log(personsState, otherState);
//   };

//   return (
//     <div className="App">
//       <h1>This is my first app</h1>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         Aomine
//       </Person>
//     </div>
//   );
// };

// export default app;
