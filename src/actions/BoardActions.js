import BoardApi from '../api/BoardApi';
import {
  boardFetch,
  fetchSuccess,
  fetchFailure,
  addTask
} from '../actionCreator/BoardActionCreator';

const fetchBoards = id => (dispatch) => {
  dispatch(boardFetch());
  const apiObj = new BoardApi();
  apiObj.fetch(id)
    .then((res) => {
      console.log(res);
      dispatch(fetchSuccess(res.data.boards));
    })
    .catch((err) => {
      dispatch(fetchFailure(err));
    });
};

const add = (row, col, task) => (dispatch) => {
  dispatch(addTask(row, col, task));
};

export {
  fetchBoards,
  add
};
