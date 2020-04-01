import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../redux/actions/contactActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.scss';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const dispatch = useDispatch();

  const addContact = () => {
    if(title && content) {
      dispatch(contactActions.addContact({
        title,
        content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateContact = () => {
    if(title && content) {
      dispatch(contactActions.updateContact(id, {
        title, content
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteContact = () => {
    dispatch(contactActions.deleteContact(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="contact"
        value={title}
        onChange={e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <textarea
        placeholder="number"
        value={content}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
      ></textarea>
      <div
        className="InputSection__container__btnWrapper"
      >
        <button
          onClick={id === -1 ? addContact : updateContact}
        >
          {id === -1 ? "ADD CONTACT" : "UPDATE CONTACT"}
        </button>      
        {id !== -1 &&
          <button
            onClick={deleteContact}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            DELETE CONTACT
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;