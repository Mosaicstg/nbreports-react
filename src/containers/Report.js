import React, { Component } from 'react';

class Report extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contactSingle: {},
      donations: {},
      donationsSearch: {},
      events: {},
      eventSingle: {},
      eventRsvps: {},
      lists: {},
      listPeople: {},
      membershipSingle: {},
      paths: {},
      people: {},
      peopleCount: {},
      tags: {},
      tagPeople: {}
    }
  }

  componentDidMount() {

    this.props.reportsWanted.forEach( reportWanted => {

      if (reportWanted.name === "contactSingle") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/${reportWanted.params.id}/contacts?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { contactSingle: data } ) )
          .catch( error => console.log(error) )
      }

      if (reportWanted.name === "donations") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/donations?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { donations: data } ) )
          .catch( error => console.log(error) )
      }

      if (reportWanted.name === "donationsSearch") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/donations/search?created_since=${reportWanted.params.createdSince}&succeeded_since=${reportWanted.params.succeededSince}&failed_since=${reportWanted.params.failedSince}?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { donationsSearch: data } ) )
          .catch( error => console.log(error) )
      }

      if (reportWanted.name === "events") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/sites/${reportWanted.params.siteSlug}/pages/events?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { events: data } ) )
          .catch( error => console.log(error) )
      }

      if (reportWanted.name === "eventSingle") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/sites/${reportWanted.params.siteSlug}/pages/events/${reportWanted.params.id}?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { eventSingle: data } ) )
          .catch( error => console.log(error) )
      }

      if (reportWanted.name === "eventRsvps") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/sites/${reportWanted.params.siteSlug}/pages/events/${reportWanted.params.id}/rsvps?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { eventRsvps: data } ) )
          .catch( error => console.log(error) )
      }

      if (reportWanted.name === "lists") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/lists?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { lists: data } ) )
      }

      if (reportWanted.name === "listPeople") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/lists/${reportWanted.params.id}/people?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { listPeople: data } ) )
      }

      if (reportWanted.name === "membershipSingle") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/${reportWanted.params.id}/memberships?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { membershipSingle: data } ) )
      }

      if (reportWanted.name === "paths") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/paths?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { paths: data } ) )
      }

      if (reportWanted.name === "people") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { people: data } ) )
      }

      if (reportWanted.name === "peopleCount") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/count?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { peopleCount: data } ) )
      }

      if (reportWanted.name === "tags") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/tags?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { tags: data } ) )
      }

      if (reportWanted.name === "tagPeople") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/tags/${reportWanted.params.tag}/people?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( data => this.setState( { tagPeople: data } ) )
      }

    })

  }

  render () {
    return (
      <div className="report-options">Report</div>
    )
  }
}

export default Report;