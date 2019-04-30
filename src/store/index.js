import { createStore, applyMiddleware } from 'redux';
import database from '../firebase/firebase';
import thunkMiddleware from 'redux-thunk';

/**
 * ACTION TYPES
 */
const GET_CLIENTS = 'get clients';

/**
 * ACTION CREATORS
 */

export const getClients = clients => ({ type: GET_CLIENTS, clients });

/**
 * THUNKS
 */
export function getClientsThunk() {
  return dispatch => {
    const clients = [];
    database
      .ref(`/clients`)
      .once('value', snap => {
        snap.forEach(data => {
          let client = data.val();
          clients.push(client);
        });
      })
      .then(() => dispatch(getClients(clients)));
  };
}

/**
 * REDUCER
 */
function Reducer(state = [], action) {
  switch (action.type) {
    case GET_CLIENTS:
      return action.clients;
    default:
      return state;
  }
}

export default createStore(Reducer, applyMiddleware(thunkMiddleware));
