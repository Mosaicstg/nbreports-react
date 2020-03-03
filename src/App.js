import React from 'react';
import Routes from './Routes';
import './App.css';
//import NationsDropdown from './containers/NationsDropdown';
//import ReportOptions from './containers/ReportOptions';
//import Report from './containers/Report';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );

  //constructor( props ) {
  //  super( props );
  //  this.state = {
  //    nations: {},
  //    nationUrl: "",
  //    nationToken: "",
  //    reportsWanted: []
  //  }
  //}
  //
  //componentDidMount() {
  //  fetch( 'http://localhost/wp_nbreports/wp-json/wp/v2/nations' )
  //    .then( resp => resp.json() )
  //    .then( data => this.setState( { nations: data } ) )
  //}
  //
  //render() {
  //  let reportOptions;
  //  let report;
  //
  //  const handleDropdownClick = ( url, token ) => {
  //    this.setState( {
  //      nationUrl: url,
  //      nationToken: token
  //    })
  //  };
  //
  //  const handleReportsSubmit = checked => {
  //    this.setState({
  //      reportsWanted: checked
  //    })
  //  };
  //
  //  if ( this.state.nationUrl.length > 0 && this.state.nationToken.length > 0 ) {
  //    reportOptions = (
  //      <div className="report-options">
  //        <ReportOptions
  //          url={this.state.nationUrl}
  //          token={this.state.nationToken}
  //          handleSubmit={handleReportsSubmit}
  //        />
  //      </div>
  //    );
  //  }
  //
  //  if ( this.state.reportsWanted.length > 0 ) {
  //    report = <Report
  //      url={this.state.nationUrl}
  //      token={this.state.nationToken}
  //      reportsWanted={this.state.reportsWanted}
  //    />
  //  }
  //
  //  return (
  //    <div className="App">
  //
  //      <header className="header">
  //        <h1>NationBuilder Reports</h1>
  //      </header>
  //
  //      <div className="nations-dropdown">
  //        <NationsDropdown nations={this.state.nations} handleClick={handleDropdownClick} />
  //      </div>
  //
  //      {reportOptions}
  //      {report}
  //
  //    </div>
  //  );
  //}

}

export default App;
