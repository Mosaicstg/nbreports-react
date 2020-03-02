import React, { Component } from 'react';
import Papa from 'papaparse';
import { Button } from 'react-bootstrap';

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
          .then( json => arr.concat(json.event) )
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
      <div className="reports">
        { this.state.contactSingle.length > 0 ? <Button href={this.state.contactSingle} variant="success" download="Single contact report">Download the single contact report</Button> : null }

        { this.state.donations.length > 0 ? <Button href={this.state.donations} variant="success" download="Donations report">Download the donations report</Button> : null }

        { this.state.donationsSearch.length > 0 ? <Button href={this.state.donationsSearch} variant="success" download="Donations search report">Download the donations search report</Button> : null }

        { this.state.events.length > 0 ? <Button href={this.state.events} variant="success" download="Events report">Download the events report</Button> : null }

        { this.state.eventSingle.length > 0 ? <Button href={this.state.eventSingle} variant="success" download="Single event report">Download the single event report</Button> : null }

        { this.state.eventRsvps.length > 0 ? <Button href={this.state.eventRsvps} variant="success" download="Event RSVPs report">Download the event RSVPs report</Button> : null }

        { this.state.lists.length > 0 ? <Button href={this.state.lists} variant="success" download="Lists report">Download the lists report</Button> : null }

        { this.state.listPeople.length > 0 ? <Button href={this.state.listPeople} variant="success" download="List people report">Download the list people report</Button> : null }

        { this.state.membershipSingle.length > 0 ? <Button href={this.state.membershipSingle} variant="success" download="Membership single report">Download the membership single report</Button> : null }

        { this.state.paths.length > 0 ? <Button href={this.state.paths} variant="success" download="Paths report">Download the paths report</Button> : null }

        { this.state.people.length > 0 ? <Button href={this.state.people} variant="success" download="People report">Download the people report</Button> : null }

        { this.state.peopleCount.length > 0 ? <div><Button href={this.state.peopleCount} variant="success" download="People count report">Download the people count report</Button></div> : null }

        { this.state.tags.length > 0 ? <Button href={this.state.tags} variant="success" download="Tags report">Download the tags report</Button> : null }

        { this.state.tagPeople.length > 0 ? <Button href={this.state.tagPeople} variant="success" download="Tag people report">Download the tag people report</Button> : null }
      </div>
    )
  }
}

export default Report;