import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      people: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost/wp_nbreports/wp-json/nbtools/v1/nbpeople?per_page=100')
      .then(resp => resp.json())
      .then(data => this.setState((prevState, props) => {
        return { people:data};
      }))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NationBuilder Reports</h1>
        </header>

        <div>
          <p>Name: {this.state.people.key_name}</p>
          <p>Data: {this.state.people.data}</p>
        </div>
      </div>

    );
  }

}

export default App;
