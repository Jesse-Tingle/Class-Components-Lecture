// Raw javascript below
// class Foo {
//   bar() {
//     this.baz() //this would call the baz method
//   }

//   baz() {
//     this.bar() //this would call the bar method
//   }
// }

// const foo = new Foo()

// foo.bar()
// foo.baz()


/* 

JavaScript Prototypes and Classes

*/

// class Bar {
//   baz() {
//     console.log('baz')
//   }
// }

// class Foo extends Bar {

// }

// const foo = new Foo()

// foo.baz() // console.log baz


//-----------------------------------------------

// import React from 'react';

// class App extends React.Component {

// }

//or 

// import React, { Component } from 'react';

// class App extends Component {
 
/*
  if you do it this way you must import 
  { Component } with the import React above
*/

// }

import React from 'react';

class App extends React.Component {
  constructor() {
    super() /* 
              You can't have a constructor without super. 
              All it does is call the constructor on the parent component
            */

    // Code here in the constructor runs when the component is created
    // creating a component simply creates the component in memory
    
    /* 
      once the component is pushed to the actual DOM and rendered 
      to the page then that component is considered mounted
    */

    /* 
      a component can be mounted and un-mounted several times throughout
      it's lifetime but it can only be created once 
    */

    this.state = {
      name: 'Jesse'
    }
  }

  // showAlert = () => { //showAlert is a class method so you do not need to declare a const
  //   alert('Hello')
  // }

  setNewName = () => {
    this.setState({
      name: 'Logan'
    })
  }

  render() {
    // code in here runs when the component renders and re-renders
    /*
      Don't put side effects in here

      Also don't put api calls in here -> it will cause an infinite loop
      which could result in maxing out your api limit
    */

    return <h1>Hello, {this.state.name} onClick={this.setNewName} </h1>
  }
}