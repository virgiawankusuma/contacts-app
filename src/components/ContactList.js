import React from 'react';

import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      {
        contacts.map(contact => ( // map through the contacts array
          <ContactItem 
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact} /> // spread the contact object into the ContactItem component
        ))
      }
    </div>
  );
};

export default ContactList;
