import React, { Component } from 'react';
import { FABButton, Icon } from 'react-mdl';

class AddContactButton extends Component {
  render(){
    return(
      
        
          <div className="contact-button">
            <FABButton  ripple raised className="FABButton">
                <Icon name="add" />
            </FABButton>
          </div>
        

    )
  }
}

export default AddContactButton;
