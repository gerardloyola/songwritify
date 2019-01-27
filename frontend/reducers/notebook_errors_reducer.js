import { RECEIVE_NOTEBOOK_ERRORS, CLEAR_NOTEBOOK_ERRORS } from "../actions/notebook_actions";


const notebookErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    case CLEAR_NOTEBOOK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default notebookErrorsReducer;