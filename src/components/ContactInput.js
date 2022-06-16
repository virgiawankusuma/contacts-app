import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        name: '',
        tag: '',
      }

      this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
      this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onNameChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          name: event.target.value,
        }
      });
    }

    onTagChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          tag: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addContact(this.state);
    }
    
  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="name" value={this.state.name} onChange={this.onNameChangeEventHandler}></input>
        <input type="text" placeholder="tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}></input>
        <button type="submit">Tambah</button>
      </form>
    )
  }
}

export default ContactInput;