import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Checkbox, Grid, Cell} from 'react-mdl';
import ContactSearchField from './contactSearchField';




const generateContacts = ({contacts}) => {
  if(contacts){
    return contacts.map((item) => {
      return(
  <List>
    <ListItem twoLine>
      <ListItemContent
        avatar='person'
        subtitle={item.dateadded}
        >
        {`${item.firstname} ${item.lastname}`}
      </ListItemContent>
      <ListItemAction>
        <Checkbox defaultUnchecked />
      </ListItemAction>
    </ListItem>
  </List>
      )
    })
  }
}


 const ContactList = (props) => {
    return(
      <div>
        <Grid>
          <Cell col={12} style={{paddingLeft:'20px'}}>
            <ContactSearchField/>
          </Cell>
        </Grid>

        {generateContacts(props)}

</div>

    )
  }


export default ContactList;
