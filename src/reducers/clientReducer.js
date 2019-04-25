const INITIAL_STATE = {
  clients: null
};

const applySetClients = (state, action) => ({
  ...state,
  clients: action.clients
});

function clientReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CLIENTS_SET': {
      return applySetClients(state, action);
    }

    default:
      return state;
  }
}

export default clientReducer;
