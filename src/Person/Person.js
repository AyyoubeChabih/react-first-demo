import React from 'react';
import './Person.css';
//import Radium, { StyleRoot } from 'radium';

const person = props => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  };

  // return (
  //   <StyleRoot> <data></data>
  //   </StyleRoot>
  // );

  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name}, I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

//export default Radium(person);
export default person;
