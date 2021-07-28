import * as c from './../actions/ActionTypes';
import "../App.css";

export default (state = {}, action) => {
  const { /*names, location, issue,*/ id, formattedWaitTime, /*timeOpen */ } = action;
  switch (action.type) {
    // case c.ADD_TICKET:
    //   return Object.assign({}, state, {
    //     [id]: {
    //       names: names,
    //       location: location,
    //       issue: issue,
    //       id: id,
    //       timeOpen: timeOpen,
    //       formattedWaitTime: formattedWaitTime
    //     }
    //   });
    case c.DELETE_INPUT:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const updatedInput = Object.assign({}, state[id], { formattedWaitTime });
      const updatedState = Object.assign({}, state, {
        [id]: updatedInput
      });
      return updatedState;
    default:
      return state;
  }
};