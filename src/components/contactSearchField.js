import React, { Component } from 'react';
import { Textfield } from 'react-mdl';

class ContactSearchField extends Component {
  render(){
    return(
      <Textfield
          onChange={() => {}}
          label="search contacts"
          style={{width: '75%'}}
          className="contact-list-search"
      />
    )
  }
}

export default ContactSearchField;
