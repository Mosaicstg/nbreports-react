import React from 'react';
import { Form, Col } from 'react-bootstrap';

function ApiOptions( props ) {

  let apiForm;

  if (props.id === "contact-single") {
    apiForm = (
      <Form><Form.Control size="sm" type="text" id={props.id} placeholder="Person's id" /></Form>
    )
  }

  if (props.id === "donations-search") {
    apiForm = (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Created since" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Succeeded since" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Failed since" />
          </Col>
        </Form.Row>
      </Form>
    )
  }

  if (props.id === "events") {
    apiForm = (
      <Form><Form.Control size="sm" type="text" id={props.id} placeholder="Site slug" /></Form>
    )
  }

  if (props.id === "event-single" || props.id === "event-rsvps") {
    apiForm = (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Site slug" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Event ID" />
          </Col>
        </Form.Row>
      </Form>
    )
  }

  return (
    <div>
      { apiForm }
    </div>
  )

}

export default ApiOptions;