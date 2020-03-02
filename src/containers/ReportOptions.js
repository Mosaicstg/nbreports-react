import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class ReportOptions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contactSingle: {
        requested: false,
        placeholders: {id: "Person's ID"},
        params: {id: null}
        },
      donations: {
        requested: false
        },
      donationsSearch: {
        requested: false,
        placeholders: {createdSince: "Created since", succeededSince: "Succeeded since", failedSince: "Failed since"},
        params: {createdSince: "", succeededSince: "", failedSince: ""}
        },
      events: {
        requested: false,
        placeholders: {siteSlug: "Site slug"},
        params: {siteSlug: ""}
        },
      eventSingle: {
        requested: false,
        placeholders: {siteSlug: "Site slug", id: "Event ID"},
        params: {siteSlug: "", id: null}
        },
      eventRsvps: {
        requested: false,
        placeholders: {siteSlug: "Site slug", id: "Event ID"},
        params: {siteSlug: "", id: null}
        },
      lists: {
        requested: false
        },
      listPeople: {
        requested: false,
        placeholders: {id: "List ID"},
        params: {id: ""}
        },
      membershipSingle: {
        requested: false,
        placeholders: {id: "Person's ID"},
        params: {id: ""}
        },
      paths: {
        requested: false
        },
      people: {
        requested: false
        },
      peopleCount: {
        requested: false
        },
      tags: {
        requested: false
        },
      tagPeople: {
        requested: false,
        placeholders: {tag: "Tag name"},
        params: {tag: ""}
      }
    }
  }

  render () {

    const checkboxes = [
      {name: "contactSingle", label: "Single person's contacts", takesParams: true},
      {name: "donations", label: "All donations", takesParams: false},
      {name: "donationsSearch", label: "Search donations", takesParams: true},
      {name: "events", label: "All events", takesParams: true},
      {name: "eventSingle", label: "Single event's details", takesParams: true},
      {name: "eventRsvps", label: "Single event's RSVPs", takesParams: true},
      {name: "lists", label: "All lists", takesParams: false},
      {name: "listPeople", label: "People associated with a list", takesParams: true},
      {name: "membershipSingle", label: "Single person's memberships", takesParams: true},
      {name: "paths", label: "All paths", takesParams: false},
      {name: "people", label: "All people", takesParams: false},
      {name: "peopleCount", label: "People count", takesParams: false},
      {name: "tags", label: "All people tags", takesParams: false},
      {name: "tagPeople", label: "People associated with a tag", takesParams: true}
    ];

    const generateCheckboxes = checkboxes => {
      const colOne = checkboxes.slice(0, 7).map(checkbox => {
        return (
          <div key={checkbox.name}>
            <Form.Check type="checkbox" name={checkbox.name} label={checkbox.label} onChange={handleCheck} />

            { checkbox.takesParams && this.state[checkbox.name].requested ?
              <Form.Row>
                { generateParamFields(checkbox) }
              </Form.Row>
              :
              null }
          </div>
        )
      });

      const colTwo = checkboxes.slice(7).map(checkbox => {
        return (
          <div key={checkbox.name}>
            <Form.Check type="checkbox" name={checkbox.name} label={checkbox.label} onChange={handleCheck} />

            { checkbox.takesParams && this.state[checkbox.name].requested ?
              <Form.Row>
                { generateParamFields(checkbox) }
              </Form.Row>
              :
              null }
          </div>
        )
      });

      return (
        <Form.Row>
          <Col>{colOne}</Col>
          <Col>{colTwo}</Col>
        </Form.Row>
      );
    };

    const generateParamFields = checkbox => {
      return Object.keys( this.state[ checkbox.name ].params ).map( paramKey => {
        //debugger;
        return (
          <Col key={checkbox.name + "-" + paramKey} >
            <Form.Control size='sm' type='text' name={checkbox.name} id={paramKey.toString()} placeholder={this.state[ checkbox.name ].placeholders[paramKey]} onChange={handleChange} />
          </Col>
        )
      })
    };

    const handleCheck = e => {
      const checked = e.target.checked;
      const name = e.target.name;

      if (checked) {
        this.setState(prevState => ({
          [name]: { ...prevState[name], requested: true }
        }));
      } else {
        this.setState(prevState => ({
          [name]: { ...prevState[name], requested: false }
        }));
      }
    };

    const handleChange = e => {
      const checkbox = e.target.name;
      const name = e.target.id;
      const value = e.target.value;

      this.setState(prevState => ({
        [checkbox]: { ...prevState[checkbox], params: {
          ...prevState[checkbox].params,
          [name]: value
          }}
      }))
    };

    const handleFormSubmit = () => {
      let objs = [];
      Object.keys(this.state).forEach ( key => {
        if (this.state[key].requested) {
          objs.push({name: key, params: this.state[key].params})
        }
      });

      return objs;
    };

    return (
      <div className="report-options">
        <h3>What types of reports do you need for {this.props.url}?</h3>
        <Form onSubmit={e => { e.preventDefault(); this.props.handleSubmit(handleFormSubmit())} }>
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