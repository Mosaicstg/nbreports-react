import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NationAdd() {

  const [ slug, setSlug ] = useState( '' );
  const [ url, setUrl ]   = useState( '' );

  const handleChange = e => {
    setSlug(e.target.value)
  };

  const handleSubmit = () => {
    fetch( `http://localhost:3001/nations?slug=${slug}`, {
      method: 'POST'
    } )
      .then( resp => resp.json() )
      .then( json => setUrl(json) )
  };

  return (
    <div>
      <header>
        <h1>Add a new nation to the tool</h1>
      </header>

      <Form onSubmit={e => {
        e.preventDefault();
        handleSubmit()
      }}>
        <Form.Control size='sm' type='text' placeholder="Enter the nation's slug" onChange={handleChange}/>
        <Button type="submit">Request authorization from nation (you will need to log in)</Button>
      </Form>

      {url.length > 0 ? <Button href={url}>Register nation for reports</Button> : null}

    </div>
  )

}

export default NationAdd;