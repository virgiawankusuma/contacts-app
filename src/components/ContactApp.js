import React from 'react';
import ContactList from './ContactList';
import ContactInput from './ContactInput';
import { getData } from '../utils/data';

class ContactApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      contacts: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  };
  
  onDeleteHandler (id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler ({name, tag}) {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, {
          id: +new Date(),
          name,
          tag,
          ImageUrl: 'https://randomuser.me/api/portraits/' + (Math.floor(Math.random() * 6) + 1) + '/' + (Math.floor(Math.random() * 6) + 1) + '.jpg',
        }],
      }
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput onAddContactHandler={this.onAddContactHandler} />
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler}/>
      </div>
    );
  }

};

export default ContactApp;
