import React, { Component } from 'react';
import ApiOptions from './ApiOptions';
import { Form, Button, Col } from 'react-bootstrap';

class ReportOptions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reportsWanted: []
    }
  }

  render () {

    const checkboxes = [
      {id: "contact-single", label: "Single person's contacts", options: true},
      {id: "donations", label: "All donations", options: false},
      {id: "donations-search", label: "Search donations", options: true},
      {id: "events", label: "All events", options: true},
      {id: "event-single", label: "One event", options: true},
      {id: "event-rsvps", label: "Single event's RSVPs", options: true},
      {id: "lists", label: "All lists", options: false},
      {id: "list-people", label: "People associated with a list", options: true},
      {id: "membership-single", label: "Single person's memberships", options: true},
      {id: "paths", label: "All paths", options: false},
      {id: "people", label: "All people", options: false},
      {id: "people-count", label: "People count", options: false},
      {id: "tags", label: "All people tags", options: false},
      {id: "tag-people", label: "People associated with a tag", options: true}
    ];

    const generateCheckboxes = checkboxes => {
      const colOne = checkboxes.slice(0, 7).map(checkbox => {
        return (
          <>
            <Form.Check type="checkbox" key={checkbox.id} id={checkbox.id} label={checkbox.label} onChange={handleChange} />

            { checkbox.options ? <ApiOptions id={checkbox.id} /> : null }
          </>
        )
      });

      const colTwo = checkboxes.slice(7).map(checkbox => {
        return (
          <>
            <Form.Check type="checkbox" key={checkbox.id} id={checkbox.id} label={checkbox.label} onChange={handleChange} />

            { checkbox.options ? <ApiOptions id={checkbox.id} /> : null }
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

    const handleChange = e => {
      let checked = this.state.reportsWanted;

      if (e.target.checked) {
        checked = checked.concat(e.target.id);

        this.setState({
          reportsWanted: checked
        });
      } else {
        checked = checked.filter(report => report !== e.target.id);

        this.setState({
          reportsWanted: checked
        });
      }
    };

    return (
      <div className="report-options">
        <h3>What types of reports do you need for {this.props.url}?</h3>

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