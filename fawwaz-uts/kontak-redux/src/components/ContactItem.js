import React from "react";
import PropTypes from "prop-types";

import "../assets/css/ContactItem.css";
  


const ContactItem = ({ name, phone, email, image, onClickDelete }) => (
  
  <div className="ContactItem">
    <p className="ContactItem__name">{name}</p>
    <p className="ContactItem__phone">{phone}</p>
    <p className="ContactItem__email">{email}</p>
    <p className="ContactItem__image">{image}</p>


    <button
      type="button"
      className="ContactItem__button"
      onClick={onClickDelete}
    >
      Delete
    </button>
  </div>
);

ContactItem.propTypes = {  
  name: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  image: PropTypes.element,
  onClickDelete: PropTypes.func
};

ContactItem.defaultProps = {
  name: "Anonymous",
  email: "null",
  phone: "+62 xx xxx xxx xxx",
  image: "ANONYMOUS",
  onClickDelete: () => {}
};

export default ContactItem;