import { combineReducers } from 'redux';
import tmxReducer from './tmxReducer';

export default combineReducers({
  tmx: tmxReducer
});
