import React, { Component } from 'react';
import './App.css';
import NationsDropdown from './containers/NationsDropdown';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nations: {}
    }
  }

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

        <div className="nations-dropdown">
          <NationsDropdown nations={this.state.nations} />
        </div>

      </div>

    );
  }

}

export default App;
