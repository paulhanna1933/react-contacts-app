import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemContent, Grid, Cell } from 'react-mdl';

class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <a onClick={this.handleOpenDialog}><i class="signin-avatar fa fa-user-circle fa-3x" aria-hidden="true"></i></a>
        <Dialog open={this.state.openDialog} className="user-modal">
          <List>
            <ListItem className="profile-list-items">
              <ListItemContent icon="settings">Settings</ListItemContent>
            </ListItem>
            <ListItem className="profile-list-items">
              <ListItemContent icon="build">Aaron Paul</ListItemContent>
            </ListItem>
            <ListItem className="profile-list-items">
              <ListItemContent icon="credit_card">Upgrade</ListItemContent>
            </ListItem>
          </List>
          <Grid className="modal-bottom">
            <Cell col={12}>
              <Button>Add account</Button>
              <Button onClick={this.handleCloseDialog}>Sign out</Button>
            </Cell>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

export default UserModal;
