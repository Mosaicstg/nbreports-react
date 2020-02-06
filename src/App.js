import React, { Component } from 'react';
import './App.css';
import NationsDropdown from './containers/NationsDropdown';
import ReportOptions from './containers/ReportOptions';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      nations: {},
      nationUrl: "",
      nationToken: ""
    }
  }

  componentDidMount() {
    fetch( 'http://localhost/wp_nbreports/wp-json/wp/v2/nations' )
      .then( resp => resp.json() )
      .then( data => this.setState( { nations: data } ) )
  }

  render() {
    let reportOptions;

    const handleDropdownClick = ( url, token ) => {
      this.setState( {
        nationUrl: url,
        nationToken: token
      } )
    }

    if ( this.state.nationUrl.length > 0 && this.state.nationToken.length > 0 ) {
      reportOptions = <ReportOptions url={this.state.nationUrl} token={this.state.nationToken} />
    }

    return (
      <div className="App">

        <header className="header">
          <h1>NationBuilder Reports</h1>
        </header>

        <div className="nations-dropdown">
          <NationsDropdown nations={this.state.nations} handleClick={handleDropdownClick} />
        </div>

        <div className="report-options">
          {reportOptions}
        </div>

      </div>

    );
  }

}

export default App;
