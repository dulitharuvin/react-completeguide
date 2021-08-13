import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Dulitha", age: 30 },
      { name: "Erandi", age: 29 },
      { name: "Dulinid", age: 5 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS : this.state.persons[0].name = "Dulitha Ruvin" ;
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Erandi Hasithanjali", age: 29 },
        { name: "Dulinid Daluwatta", age: 5 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Dulitha!!!') }>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dulitha!#')}>My Hobies : Reading Books</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }

}

export default App;
