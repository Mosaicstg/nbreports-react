import React, { Component } from 'react';
import Papa from 'papaparse';

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
    const arr = [];

    this.props.reportsWanted.forEach( reportWanted => {

      if (reportWanted.name === "contactSingle") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/${reportWanted.params.id}/contacts?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { contactSingle: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "donations") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/donations?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { donations: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "donationsSearch") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/donations/search?created_since=${reportWanted.params.createdSince}&succeeded_since=${reportWanted.params.succeededSince}&failed_since=${reportWanted.params.failedSince}?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { donationsSearch: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "events") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/sites/${reportWanted.params.siteSlug}/pages/events?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { events: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "eventSingle") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/sites/${reportWanted.params.siteSlug}/pages/events/${reportWanted.params.id}?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { eventSingle: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "eventRsvps") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/sites/${reportWanted.params.siteSlug}/pages/events/${reportWanted.params.id}/rsvps?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { eventRsvps: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "lists") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/lists?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { lists: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "listPeople") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/lists/${reportWanted.params.id}/people?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { listPeople: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "membershipSingle") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/${reportWanted.params.id}/memberships?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { membershipSingle: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "paths") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/paths?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { paths: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "people") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { people: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "peopleCount") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/people/count?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { peopleCount: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "tags") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/tags?limit=100&access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { tags: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

      if (reportWanted.name === "tagPeople") {
        fetch( `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/tags/${reportWanted.params.tag}/people?access_token=${this.props.token}` )
          .then( resp => resp.json() )
          .then( json => arr.concat(json.results) )
          .then( data => Papa.unparse(data) )
          .then( csv => {
            let csvFile = "data:text/csv;charset=utf-8," + csv;
            this.setState( { tagPeople: csvFile } )
          })
          .catch( error => console.log("Error: ", error) )
      }

    })

  }

  render () {
    return (
      <div className="report-options">
        { this.state.contactSingle.length > 0 ? <div><a href={this.state.contactSingle} download="Single contact report">Download the single contact report</a></div> : Report }
        { this.state.donations.length > 0 ? <div><a href={this.state.donations} download="Donations report">Download the donations report</a></div> : Report }
        { this.state.donationsSearch.length > 0 ? <div><a href={this.state.donationsSearch} download="Donations search report">Download the donations search report</a></div> : Report }
        { this.state.events.length > 0 ? <div><a href={this.state.events} download="Events report">Download the events report</a></div> : Report }
        { this.state.eventSingle.length > 0 ? <div><a href={this.state.eventSingle} download="Single event report">Download the single event report</a></div> : Report }
        { this.state.eventRsvps.length > 0 ? <div><a href={this.state.eventRsvps} download="Event RSVPs report">Download the event RSVPs report</a></div> : Report }
        { this.state.lists.length > 0 ? <div><a href={this.state.lists} download="Lists report">Download the lists report</a></div> : Report }
        { this.state.listPeople.length > 0 ? <div><a href={this.state.listPeople} download="List people report">Download the list people report</a></div> : Report }
        { this.state.membershipSingle.length > 0 ? <div><a href={this.state.membershipSingle} download="Membership single report">Download the membership single report</a></div> : Report }
        { this.state.paths.length > 0 ? <div><a href={this.state.paths} download="Paths report">Download the paths report</a></div> : Report }
        { this.state.people.length > 0 ? <div><a href={this.state.people} download="People report">Download the people report</a></div> : Report }
        { this.state.peopleCount.length > 0 ? <div><a href={this.state.peopleCount} download="People count report">Download the people count report</a></div> : Report }
        { this.state.tags.length > 0 ? <div><a href={this.state.tags} download="Tags report">Download the tags report</a></div> : Report }
        { this.state.tagPeople.length > 0 ? <div><a href={this.state.tagPeople} download="Tag people report">Download the tag people report</a></div> : Report }
      </div>
    )
  }
}

export default Report;