import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';
import { updateTask, addAndDeleteTask, ifMemberExist } from './middlewares/taskMiddleware';

const middleware = applyMiddleware(
  promise(),
  thunk,
  updateTask,
  addAndDeleteTask,
  ifMemberExist,
  logger()
);

export default createStore(reducer, middleware);
