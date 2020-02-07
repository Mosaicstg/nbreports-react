import React, { Component } from 'react';

class Report extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paths: {}
    }
  }

  componentDidMount() {
    if (this.props.reportsWanted.includes("paths")) {
      fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/paths?access_token=${this.props.token}` )
        .then( resp => resp.json() )
        .then( data => this.setState( { paths: data } ) )
    }

  }

  render () {
    return (
      <div className="report-options">Report</div>
    )
  }
}

export default Report;