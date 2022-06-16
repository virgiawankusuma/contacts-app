import React from 'react';
import { createRoot } from 'react-dom/client';

class ContactInput extends React.Component {
  render() {
    return (
      <form className="contact-input">
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="tag"></input>
        <button type="submit">Tambah</button>
      </form>
    )
  }
}

export default ContactInput;