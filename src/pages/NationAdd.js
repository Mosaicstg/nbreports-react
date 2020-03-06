import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class NationAdd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: '',
      url: ''
    }
  }

  render() {

    const handleChange = e => {
      this.setState({ slug: e.target.value })
    };

    const handleSubmit = () => {
      fetch(`http://localhost:3001/nations?slug=${this.state.slug}`, {
        method: 'POST'
      })
        .then(resp => resp.json())
        .then(json => this.setState( { url: json }) )
    };

    return (
      <div>
        <header>
          <h1>Add a new nation to the tool</h1>
        </header>

        <Form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
          <Form.Control size='sm' type='text' placeholder="Enter the nation's slug" onChange={handleChange} />
          <Button type="submit">Request authorization from nation (you will need to log in)</Button>
        </Form>

        { this.state.url.length > 0 ? <Button href={this.state.url}>Register nation for reports</Button> : null }

      </div>
    )
  }
}

export default NationAdd;