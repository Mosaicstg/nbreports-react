import React, { Component } from 'react';
import ApiOptions from './ApiOptions';
import { Form, Button, Col } from 'react-bootstrap';

class ReportOptions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contactSingle: {requested: false, params: {id: null}},
      donations: {requested: false},
      donationsSearch: {requested: false, params: {createdSince: "", succeededSince: "", failedSince: ""}},
      events: {requested: false},
      eventSingle: {requested: false, params: {siteSlug: "", id: null}},
      eventRsvps: {requested: false, params: {siteSlug: "", id: null}},
      lists: {requested: false},
      listPeople: {requested: false, params: {id: null}},
      membershipSingle: {requested: false, params: {id: null}},
      paths: {requested: false},
      people: {requested: false},
      peopleCount: {requested: false},
      tags: {requested: false},
      tagPeople: {requested: false, params: {tagName: ""}}
    }
  }

  render () {

    const checkboxes = [
      {id: "contactSingle", label: "Single person's contacts", options: true},
      {id: "donations", label: "All donations", options: false},
      {id: "donationsSearch", label: "Search donations", options: true},
      {id: "events", label: "All events", options: true},
      {id: "eventSingle", label: "One event", options: true},
      {id: "eventRsvps", label: "Single event's RSVPs", options: true},
      {id: "lists", label: "All lists", options: false},
      {id: "listPeople", label: "People associated with a list", options: true},
      {id: "membershipSingle", label: "Single person's memberships", options: true},
      {id: "paths", label: "All paths", options: false},
      {id: "people", label: "All people", options: false},
      {id: "peopleCount", label: "People count", options: false},
      {id: "tags", label: "All people tags", options: false},
      {id: "tagPeople", label: "People associated with a tag", options: true}
    ];

    const generateCheckboxes = checkboxes => {
      const colOne = checkboxes.slice(0, 7).map(checkbox => {
        return (
          <>
            <Form.Check type="checkbox" key={checkbox.id} id={checkbox.id} label={checkbox.label} onChange={handleCheck} />

            { checkbox.options ? <ApiOptions id={checkbox.id} params={this.state[checkbox.id].params} handleChange={handleChange} /> : null }
          </>
        )
      });

      const colTwo = checkboxes.slice(7).map(checkbox => {
        return (
          <>
            <Form.Check type="checkbox" key={checkbox.id} id={checkbox.id} label={checkbox.label} onChange={handleCheck} />

            { checkbox.options ? <ApiOptions id={checkbox.id} handleChange={handleChange} /> : null }
          </>
        )
      });

      return (
        <Form.Row>
          <Col>{colOne}</Col>
          <Col>{colTwo}</Col>
        </Form.Row>
      );
    };

    const handleCheck = e => {
      // https://reactjs.org/docs/events.html#event-pooling
      e.persist();
      if (e.target.checked) {
        this.setState(prevState => ({
          [e.target.id]: { ...prevState[e.target.id], requested: true }
        }));
      } else {
        this.setState(prevState => ({
          [e.target.id]: { ...prevState[e.target.id], requested: false }
        }));
      }
    };

    const handleChange = e => {
      // This is where we'd update the ReportOptions state based on what's entered in the fields in ApiOptions
      //debugger;
      //this.setState(prevState => ({
      //  [e.target.id]: { ...prevState[e.target.id], params: {
      //
      //    }}
      //}))
    }

    return (
      <div className="report-options">
        <h3>What types of reports do you need for {this.props.url}?</h3>
        {/*Submit is broken now because reportsWanted doesn't exist in the state anymore*/}
        <Form onSubmit={e => { e.preventDefault(); this.props.handleSubmit(this.state.reportsWanted)} }>
            <div className="checkboxes">
              { generateCheckboxes(checkboxes) }
            </div>
            <div className="submit">
              <Button type="submit">Pull reports</Button>
            </div>
        </Form>
      </div>
    )
  }
}

export default ReportOptions;