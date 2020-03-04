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

    const apiStart = `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/`;

    const apiEnd = `?access_token=${this.props.token}`;

    this.props.reportsWanted.forEach( reportWanted => {
      let reportName = reportWanted.name;
      let apiEndpoint;

      if (reportName === 'contactSingle') {
        apiEndpoint = apiStart + `people/${reportWanted.params.id}/contacts` + apiEnd;
      }

      if (reportName === 'donations') {
        apiEndpoint = apiStart + 'donations' + apiEnd;
      }

      if (reportName === 'donationsSearch') {
        apiEndpoint = apiStart + `donations/search?created_since=${reportWanted.params.createdSince}&succeeded_since=${reportWanted.params.succeededSince}&failed_since=${reportWanted.params.failedSince}` + apiEnd;
      }

      if (reportName === 'events') {
        apiEndpoint = apiStart + `sites/${reportWanted.params.siteSlug}/pages/events` + apiEnd;
      }

      if (reportName === 'eventSingle') {
        apiEndpoint = apiStart + `sites/${reportWanted.params.siteSlug}/pages/events/${reportWanted.params.id}` + apiEnd;
      }

      if (reportName === 'eventRsvps') {
        apiEndpoint = apiStart + `sites/${reportWanted.params.siteSlug}/pages/events/${reportWanted.params.id}/rsvps` + apiEnd;
      }

      if (reportName === 'lists') {
        apiEndpoint = apiStart + 'lists' + apiEnd;
      }

      if (reportName === 'listPeople') {
        apiEndpoint = apiStart + `lists/${reportWanted.params.id}/people` + apiEnd;
      }

      if (reportName === 'membershipSingle') {
        apiEndpoint = apiStart + `people/${reportWanted.params.id}/memberships` + apiEnd;
      }

      if (reportName === 'paths') {
        apiEndpoint = apiStart + 'paths' + apiEnd;
      }

      if (reportName === 'people') {
        apiEndpoint = apiStart + 'people' + apiEnd;
      }

      if (reportName === 'peopleCount') {
        apiEndpoint = apiStart + 'people/count' + apiEnd;
      }

      if (reportName === 'tags') {
        apiEndpoint = apiStart + 'tags' + apiEnd;
      }

      if (reportName === 'tagPeople') {
        apiEndpoint = apiStart + `tags/${reportWanted.params.tag}/people` + apiEnd;
      }

      fetch( apiEndpoint )
        .then( resp => resp.json() )
        .then( json => arr.concat( json.results ))
        .then( data => Papa.unparse( data ) )
        .then( csv => {
          let csvFile = "data:text/csv;charset=utf-8," + csv;
          this.setState( { [reportName]: csvFile } )
        } )
        .catch( error => console.log( "Error: ", error ) )

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