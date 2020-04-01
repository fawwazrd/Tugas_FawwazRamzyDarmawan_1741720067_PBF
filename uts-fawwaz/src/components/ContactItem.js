import React from 'react';
import './ContactItem.styles.scss';

const ContactItem = ({ title, content, onItemClicked}) => {
  return (
    <div
      className="ContactItem__container"
      role="button"
      onClick={onItemClicked}
    >
      <h2>{"Name: "+title}</h2>
      <p>{"No: "+content}</p>
    </div>
  );
};

export default ContactItem;