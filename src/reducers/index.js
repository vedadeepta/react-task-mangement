import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import BoardReducer from './BoardReducer';

export default combineReducers({
  ProjectReducer,
  BoardReducer
});
