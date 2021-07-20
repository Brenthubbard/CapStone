
import formVisibleReducer from './form-visible-reducer';
import inputListReducer from './Input-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterInputList: inputListReducer,
  // new line of code below
  firestore: firestoreReducer
});

export default rootReducer;