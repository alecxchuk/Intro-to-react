import React, {Component} from "react";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({query: query.trim()});
  };

clearQuery=()=>{
  this.setState({query: ''})
}
  render() {
    const {contacts, onDeleteContact} = this.props;
    const {query} = this.state;

    {
      /* variable for contacts that match specific pattern*/
    }
    let showingContacts;
    {
      /* input*/
    }
    if (query) {
      {
        /* Instance of escapeRegExp*/
      }
      {
        /* If any special characters exist in query, escape them so special characters are string literals*/
      }
      const match = new RegExp(escapeRegExp(query), "i");
      {
        /* filter where the contact name matches the regular expression and store in variable*/
      }
      showingContacts = contacts.filter(contact => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    {
      /* sort contacts alphabetical by name */
    }
    showingContacts.sort(sortBy("name"));

    return (
      <div className="list-contacts">
        {/*{JSON.stringify(this.state)}*/}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick ={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className="contact-List">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              {/* Invoke removeContact whenever button is clicked on*/}
              <button
                onClick={() => onDeleteContact(contact)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default ListContacts;
