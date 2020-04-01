import actionTypes from '../actionTypes';

const initialState = {
  contact: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_CONTACT: {
      const contact = [...state.contact];
      contact.push(action.kontak);
      return {
        contact,
      }
    }
    case actionTypes.UPDATE_CONTACT: {
      const { index, kontak } = action;
      const contact = [...state.contact];
      contact[index] = kontak;
      return {
        contact,
      }
    }
    case actionTypes.DELETE_CONTACT: {
      const { index } = action;
      const contact = [];
      state.contact.forEach((kontak, i) => {
        if(index !== i) {
          contact.push(kontak)
        }
      })      
      return {
        contact,
      }
    }
    default:
      return state;
  }
}