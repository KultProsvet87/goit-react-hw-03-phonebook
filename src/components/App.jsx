import { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

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
