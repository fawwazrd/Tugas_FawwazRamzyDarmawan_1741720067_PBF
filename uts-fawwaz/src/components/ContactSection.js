import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import inputActions from '../redux/actions/inputActions';
import './ContactSection.style.scss';

const ContactSection = () => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact.contact)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  }

  if(contact.length === 0) {
    return (
      <div className="contactSection__container__empty">
        <p >contact empty</p>
      </div>  
    )
  }

  return (
    <div className="contactSection__container">
      {contact.map((item, index) => {
        if(item) {
          return (
            <ContactItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default ContactSection;