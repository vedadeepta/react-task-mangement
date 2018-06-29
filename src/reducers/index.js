import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import BoardReducer from './BoardReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  ProjectReducer,
  BoardReducer,
  ErrorReducer
});
