import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nations: {}
    }
  }

  //componentDidMount() {
  //  fetch('http://localhost/wp_nbreports/wp-json/nbtools/v1/nbpeople?per_page=100')
  //    .then(resp => resp.json())
  //    .then(data => this.setState((prevState, props) => {
  //      return { people: data[0]};
  //    }))
  //}

  componentDidMount() {
    fetch('http://localhost/wp_nbreports/wp-json/wp/v2/nations')
      .then(resp => resp.json())
      .then(data => this.setState({nations: data}))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NationBuilder Reports</h1>
        </header>

        <div className="Dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-title">
              Choose a nation
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>

    );
  }

}

export default App;
