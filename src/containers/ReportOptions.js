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
              <Form.Check type="checkbox" id="people" label="People" onChange={handleChange} />
              <Form.Check type="checkbox" id="lists" label="Lists" onChange={handleChange} />
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