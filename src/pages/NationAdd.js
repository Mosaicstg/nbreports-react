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
      fetch(`http://localhost:3001/nations/authorize?slug=${this.state.slug}`)
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
          <Button type="submit">Add nation</Button>
        </Form>

        <a href={this.state.url}>Hello</a>
      </div>
    )
  }
}

export default NationAdd;