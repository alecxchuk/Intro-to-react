import React, { Component } from 'react';
import ListContacts from './ListContacts'



class App extends Component {
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
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
  }
  render() {
    return (
      <div>
      {/* Pass removeContact method as a prop to ListContacts to know when the button is clicked*/}
        <ListContacts onDeleteContact={this.removeContact}
         contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
