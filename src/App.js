import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'



class App extends Component {
  state = {
    contacts : []
  }

/* invoked by react whenever component gets mounted to the view */
  componentDidMount(){
    {/* API request on ContactsAPI */}
    ContactsAPI.getAll().then((contacts) => {
      {/* update state with contacts */}
      this.setState({contacts})
    })
}

/* Removes a contact when the contact is clicked */
// Input is the specific contact clicked
  removeContact = (contact)=>{
    // React Method for updating State by passing in a function
    // We use this because the new state is dependent on the previous state.
    this.setState((state)=>({
      // Filter current contacts on the current state
      // Remove where the state contact id does not equal the contact id.
      // Resulting in a new contact state with the contact clicked on deleted
      contacts:state.contacts.filter((c)=>c.id!==contact.id)
    }))
    /* Removes contact from API */
    ContactsAPI.remove(contact)
  }

  createContact(contact){
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([contact])
      }))
    })
  }
  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(
          <ListContacts
            contacts={this.state.contacts}
            /* Pass removeContact method as a prop to ListContacts to know when the button is clicked*/
            onDeleteContact={this.removeContact}
          />
        )}/>

        <Route path="/create" render={({ history }) =>(
          <CreateContact
          onCreateContact={(contact)=>{
            this.createContact(contact)
            history.push('/')
          }}/>

        )}/>




      </div>
    )
  }
}

export default App;
