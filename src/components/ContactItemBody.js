import React from 'react';

const ContactItemBody = ({ name, tag }) => {
  return (
    <div className="contact-item__body">
      <div className="contact-item__name">{name}</div>
      <div className="contact-item__username">@{tag}</div>
    </div>
  );
};

export default ContactItemBody;
