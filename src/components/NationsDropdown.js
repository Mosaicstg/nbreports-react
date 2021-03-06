import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function NationsDropdown(props) {

    let dropdownItems;

    if ( props.nations.length > 0 ) {
      dropdownItems = props.nations.map( nation => (
        <Dropdown.Item
          key={nation}
          as="button"
          onClick={() => props.handleClick(nation)}
        >
          {nation}
        </Dropdown.Item>
      ) );
    }

    return (
      <DropdownButton id="dropdown-title" title="Choose a nation">
        {dropdownItems}
      </DropdownButton>
    )

}

export default NationsDropdown;