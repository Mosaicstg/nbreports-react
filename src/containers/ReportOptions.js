import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ReportOptions extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="report-options">
        <h3>What types of reports do you need for {this.props.url}?</h3>

        <Form>
            <div className="checkboxes">
              <Form.Check type="checkbox" id="people" label="People" />
              <Form.Check type="checkbox" id="lists" label="Lists" />
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