import React, { Component } from 'react';

class Report extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people: {},
      peopleCount: {},
      lists: {},
      listPeople: {},
      tags: {},
      tagPeople: {},
      donations: {},
      searchDonations: {},
      events: {},
      eventSingle: {},
      eventRsvps: {},
      contactSingle: {},
      membershipSingle: {},
      paths: {}
    }
  }

  componentDidMount() {

    if (this.props.reportsWanted.includes("people")) {
      fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people?access_token=${this.props.token}` )
        .then( resp => resp.json() )
        .then( data => this.setState( { people: data } ) )
    }

    if (this.props.reportsWanted.includes("people-count")) {
      fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/count?access_token=${this.props.token}` )
        .then( resp => resp.json() )
        .then( data => this.setState( { peopleCount: data } ) )
    }

    if (this.props.reportsWanted.includes("lists")) {
      fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/lists?access_token=${this.props.token}` )
        .then( resp => resp.json() )
        .then( data => this.setState( { lists: data } ) )
    }

    if (this.props.reportsWanted.includes("tags")) {
      fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/tags?access_token=${this.props.token}` )
        .then( resp => resp.json() )
        .then( data => this.setState( { tags: data } ) )
    }

    if (this.props.reportsWanted.includes("donations")) {
      fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/donations?access_token=${this.props.token}` )
        .then( resp => resp.json() )
        .then( data => this.setState( { donations: data } ) )
    }

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