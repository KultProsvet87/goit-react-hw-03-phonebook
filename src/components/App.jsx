import { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmite = newContact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert('This contact already added');
      return;
    }
    this.setState(prev => {
      return { contacts: [...prev.contacts, newContact], name: '' };
    });
  };

  onFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  delContact = contactID => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== contactID)],
    }));
  };

  render() {
    return (
      <div>
        React homework template
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmite} />
        <Filter
          FilterValue={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          delContact={this.delContact}
        />
      </div>
    );
  }
}
