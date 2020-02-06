import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ReportOptions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reportsWanted: []
    }
  }

  render () {

    const handleChange= e => {
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
              <Form.Check type="checkbox" id="people" label="All people" onChange={handleChange} />
              <Form.Check type="checkbox" id="people-count" label="People count" onChange={handleChange} />
              <Form.Check type="checkbox" id="lists" label="All lists" onChange={handleChange} />
              <Form.Check type="checkbox" id="lists-people" label="People associated with a list" onChange={handleChange} />
              <Form.Check type="checkbox" id="tags" label="All people tags" onChange={handleChange} />
              <Form.Check type="checkbox" id="tag-people" label="People associated with a tag" onChange={handleChange} />
              <Form.Check type="checkbox" id="donations" label="All donations" onChange={handleChange} />
              <Form.Check type="checkbox" id="search-donations" label="Search donations" onChange={handleChange} />
              <Form.Check type="checkbox" id="events" label="All Events" onChange={handleChange} />
              <Form.Check type="checkbox" id="events-single" label="One event" onChange={handleChange} />
              <Form.Check type="checkbox" id="events-rsvps" label="Single event's RSVPs" onChange={handleChange} />
              <Form.Check type="checkbox" id="contacts-single" label="Single person's contacts" onChange={handleChange} />
              <Form.Check type="checkbox" id="memberships-single" label="Single person's memberships" onChange={handleChange} />
              <Form.Check type="checkbox" id="paths" label="All paths" onChange={handleChange} />
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