import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class NationsDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nationUrl: "",
      nationToken: ""
    }
  }

  render () {
    let dropdownItems;

    const handleClick = ( url, token ) => {
      this.setState( {
        nationUrl: url,
        nationToken: token
      } )
    }

    if (this.props.nations.length > 0) {
      dropdownItems = this.props.nations.map(nation => (
        <Dropdown.Item
          key={nation.id}
          as="button"
          onClick={() => handleClick(nation.title.rendered, nation.access_token)}
        >
          {nation.title.rendered}
        </Dropdown.Item>
      ));
    }

    return (
      <DropdownButton id="dropdown-title" title="Choose a nation">
        {dropdownItems}
      </DropdownButton>
    )

  }
}

export default NationsDropdown;