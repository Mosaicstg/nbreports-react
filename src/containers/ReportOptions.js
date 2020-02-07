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

    const checkboxes = [
      {id: "people", label: "All people"},
      {id: "people-count", label: "People count"},
      {id: "lists", label: "All lists"},
      {id: "list-people", label: "People associated with a list"},
      {id: "tags", label: "All people tags"},
      {id: "tag-people", label: "People associated with a tag"},
      {id: "donations", label: "All donations"},
      {id: "search-donations", label: "Search donations"},
      {id: "events", label: "All events"},
      {id: "event-single", label: "One event"},
      {id: "event-rsvps", label: "Single event's RSVPs"},
      {id: "contact-single", label: "Single person's contacts"},
      {id: "membership-single", label: "Single person's memberships"},
      {id: "paths", label: "All paths"}
    ];

    const generateCheckboxes = checkboxes => {
      return checkboxes.map(checkbox => {
        return <Form.Check
          type="checkbox"
          key={checkbox.id}
          id={checkbox.id}
          label={checkbox.label}
          onChange={handleChange}
        />
      });
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