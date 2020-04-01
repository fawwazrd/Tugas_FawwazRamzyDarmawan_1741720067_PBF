import actionTypes from '../actionTypes';

export default {
  addContact: (kontak)=> ({
    type: actionTypes.ADD_CONTACT,
    kontak
  }),
  updateContact: (index, kontak) => ({
    type: actionTypes.UPDATE_CONTACT,
    index,
    kontak,
  }),
  deleteContact: (index) => ({
    type: actionTypes.DELETE_CONTACT,
    index
  })
}