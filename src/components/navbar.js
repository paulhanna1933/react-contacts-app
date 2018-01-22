import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';

import ContactList from './contactlist';
import UserModal from './usermodal';

const URL_CONTACTS = 'http://localhost:3004/contacts';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts:''
    }
  }

  componentDidMount() {
    fetch(URL_CONTACTS, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
      this.setState({
        contacts:json
      })
    })
  }


  render() {
    return(
      <div className="demo-big-content">
    <Layout>
        <Header title="Contactly" scroll={true} className="navbar">
            <Navigation>
                <a href="/"><i className="fa fa-address-book-o fa-lg" aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-bell-o fa-lg" aria-hidden="true"></i></a>
                <UserModal/>
            </Navigation>
        </Header>
        <Drawer title="Contactly">
            <Navigation>
              <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable

                expandableIcon="search"
                placeholder="search"
                className="nav-search"
            />
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <ContactList contacts={this.state.contacts}/>

        </Content>



    </Layout>

</div>

    )
  }
}

export default NavBar;
