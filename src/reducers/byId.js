const byId = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case 'RECEIVE_TODOS':
      action.response.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
