import React from 'react';
import { Form, Col } from 'react-bootstrap';

function ApiOptions( props ) {

  let apiForm;

  if (props.id === "contactSingle" || props.id === "listPeople" || props.id === "membershipSingle") {
    //debugger;
    // Passing names of needed params from ReportOptions in props (props.params)
    // This is an object - would like to give the form field an attribute matching each param name so that handleChange
    // can then use that to update the state back in ReportOptions
    apiForm = (
      <Form.Control size="sm" type="text" id={props.id} placeholder="Person's id" onChange={props.handleChange} />
    )
  }

  if (props.id === "donationsSearch") {
    apiForm = (
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
    )
  }

  if (props.id === "events") {
    apiForm = (
      <Form.Control size="sm" type="text" id={props.id} placeholder="Site slug" />
    )
  }

  if (props.id === "eventSingle" || props.id === "eventRsvps") {
    apiForm = (
        <Form.Row>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Site slug" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" id={props.id} placeholder="Event ID" />
          </Col>
        </Form.Row>
    )
  }

  if (props.id === "tagPeople") {
    apiForm = (
      <Form.Control size="sm" type="text" id={props.id} placeholder="Name of the tag" />
    )
  }

  return (
    <div>
      { apiForm }
    </div>
  )

}

export default ApiOptions;