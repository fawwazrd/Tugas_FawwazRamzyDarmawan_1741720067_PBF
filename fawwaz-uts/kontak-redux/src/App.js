import React, { Component } from "react";
import { connect } from "react-redux";

import ContactList from "./components/ContactList";
import ContactItem from "./components/ContactItem";
import { addContact, removeContact } from "./states/action";
import "./assets/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      image: ""
    };
  }

  render() {
    const { name, phone, email, image } = this.state;
    // The state from store passed as props
    const { contacts, addNewContact, removeExistingContact } = this.props;

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand " href="#" >
          <h2>Add Friend</h2>
          </a>
          {/* <button
            // className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* </button> */} 

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/">
                  components
                </Link>
              </li> */}
            
              {/* <button className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </button> */}
            </ul>
          </div>
        </nav>
        <div className="App__form">
          <input
            type="text"
            value={name}
            onChange={event => this.setState({ name: event.target.value })}
            className="App__input"
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            value={phone}
            onChange={event => this.setState({ phone: event.target.value })}
            className="App__input"
            placeholder="Phone"
          />
          <br />
          <input
            type="text"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            className="App__input"
            placeholder="Email"
          />
          <br />
          <input
            type="file" name="image" accept="image/*" capture="user"        
            value={image}
            onChange={event => this.setState({ image: event.target.value })}
            className="App__input"
            placeholder="Image"
          />
          <br />
          <button
            type="button"
            onClick={() => {
              if (!name || !phone) {
                alert("Field cannot be empty !");
                
              } else if (!name || !email){
                alert ("Field cannot be empty !");
                
              } else if (!phone || !email){
                alert ("Field cannot be empty !"); 
                return;
              }

              this.setState({ name: "", phone: "", email: "", image });
              addNewContact({ name, phone, email, image });
            }}
            className="App__button"
          >
            Add New Contact
          </button>
        </div>
        <ContactList>
          {contacts.map(contact => {
            return (
              <ContactItem
                key={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                image={contact.image}
                onClickDelete={() => removeExistingContact(contact.id)}
              />
            );
          })}
        </ContactList>
      </div>
    );
  }
}

// Get your state and passing to your App component as props
const mapStateToProps = ({ contacts }) => ({
  contacts
});

// Create functionality which need to use dispatch
const mapDispatchToProps = dispatch => ({
  addNewContact: contact => {
    dispatch(addContact(contact));
  },
  removeExistingContact: contactID => {
    dispatch(removeContact(contactID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);