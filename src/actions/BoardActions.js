import BoardApi from '../api/BoardApi';
import {
  boardFetch,
  fetchSuccess,
  fetchFailure,
  addTask,
  updateTask,
  deleteTask,
  addMembers
} from '../actionCreator/BoardActionCreator';

const fetchBoards = id => (dispatch) => {
  dispatch(boardFetch());
  const apiObj = new BoardApi();
  apiObj.fetch(id)
    .then((res) => {
      dispatch(fetchSuccess(res.data.boards));
    })
    .catch((err) => {
      dispatch(fetchFailure(err));
    });
};

const taskAdd = (row, col, task) => (dispatch) => {
  dispatch(addTask(row, col, task));
};

const taskUpdate = (row, col, oldTask, newTask) => (dispatch) => {
  dispatch(updateTask(row, col, oldTask, newTask));
};

const taskDelete = (row, task) => (dispatch) => {
  dispatch(deleteTask(row, task));
};

const memberAdd = name => (dispatch) => {
  dispatch(addMembers(name));
};

export {
  fetchBoards,
  taskAdd,
  taskUpdate,
  taskDelete,
  memberAdd
};
