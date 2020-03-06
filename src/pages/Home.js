import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NationsDropdown from '../containers/NationsDropdown';
import ReportOptions from '../containers/ReportOptions';
import Report from '../containers/Report';

class Home extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      nations: [],
      nationSlug: "",
      reportsWanted: []
    }
  }

  componentDidMount() {
    fetch( 'http://localhost:3001/nations' )
      .then( resp => resp.json() )
      .then( data => {
        let nations = [];
        data.forEach( nation => {
          nations.push(nation.slug)
        });
        this.setState( { nations: nations } )
      } )
  }

  render() {
    let reportOptions;
    let report;

    const handleDropdownClick = ( slug ) => {
      this.setState( {
        nationSlug: slug
      })
    };

    const handleReportsSubmit = checked => {
      this.setState({
        reportsWanted: checked
      })
    };

    if ( this.state.nationSlug.length > 0 ) {
      reportOptions = (
        <div className="report-options">
          <ReportOptions
            slug={this.state.nationSlug}
            handleSubmit={handleReportsSubmit}
          />
        </div>
      );
    }

    if ( this.state.reportsWanted.length > 0 ) {
      report = <Report
        url={this.state.nationSlug}
        reportsWanted={this.state.reportsWanted}
      />
    }

    return (
      <div className="home">

        <header className="header">
          <h1>NationBuilder Reports</h1>
        </header>

        <div className="nations-dropdown">
          <NationsDropdown nations={this.state.nations} handleClick={handleDropdownClick} />
          <Link to='/add-nation'>Add nation</Link>
        </div>

        {reportOptions}
        {report}

      </div>
    );
  }

}

export default Home;
