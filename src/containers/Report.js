import React, { Component } from 'react';
import Papa from 'papaparse';
import { Button } from 'react-bootstrap';

class Report extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contactSingle: { report: [], fileName: 'Single contact report', buttonName: 'Download the single contact report' },
      donations: { report: [], fileName: 'Donations report', buttonName: 'Download the donations report' },
      donationsSearch: { report: [], fileName: 'Donations search report', buttonName: 'Download the donations search report' },
      events: { report: [], fileName: 'Events report', buttonName: 'Download the events report' },
      eventSingle: { report: [], fileName: 'Single event report', buttonName: 'Download the single event report' },
      eventRsvps: { report: [], fileName: 'Event RSVPs report', buttonName: 'Download the event RSVPs report' },
      lists: { report: [], fileName: 'Lists report', buttonName: 'Download the lists report' },
      listPeople: { report: [], fileName: 'List people report', buttonName: 'Download the list people report' },
      membershipSingle: { report: [], fileName: 'Membership single report', buttonName: 'Download the membership single report' },
      paths: { report: [], fileName: 'Paths report', buttonName: 'Download the paths report' },
      people: { report: [], fileName: 'People report', buttonName: 'Download the people report' },
      peopleCount: { report: [], fileName: 'People count report', buttonName: 'Download the people count report' },
      tags: { report: [], fileName: 'Tags report', buttonName: 'Download the tags report' },
      tagPeople: { report: [], fileName: 'Tag people report', buttonName: 'Download the tag people report' }
    }
  }

  componentDidMount() {

    let arr = [];

    const apiStart = `https://cors-anywhere.herokuapp.com/${this.props.url}/api/v1/`;

    const apiEnd = `?limit=100&access_token=${this.props.token}`;

    let apiEndpoint;

    this.props.reportsWanted.forEach( reportWanted => {
      let reportName = reportWanted.name;

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
        .then( json => {
          if (json.results) {
            return arr.concat( json.results );
          } else if (json.event) {
            return arr.concat( json.event )
          } else {
            return arr.concat( json )
          }
        })
        .then( data => Papa.unparse( data ))
        .then( csv => {
          let csvFile = "data:text/csv;charset=utf-8," + csv;
          this.setState( prevState => ({
            [reportName]: { ...prevState[reportName], report: csvFile }
          }))
        })
        .catch( error => console.log( "Error: ", error ) )
    })
  }

  render () {
    const reports = () => {
      return Object.keys(this.state).map( key => {
        if ( this.state[key].report.length > 0 ) {
          return <Button href={this.state[key].report} key={key} variant="success" download={this.state[key].fileName}>{this.state[key].buttonName}</Button>
        } else {
          return null
        }
      })
    };

    return (
      <div className="reports">
        { reports() }
      </div>
    )
  }
}

export default Report;