import React from 'react';

import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {
        contacts.map(contact => ( // map through the contacts array
          <ContactItem key={contact.id} {...contact} /> // spread the contact object into the ContactItem component
        ))
      }
    </div>
  );
};

export default ContactList;