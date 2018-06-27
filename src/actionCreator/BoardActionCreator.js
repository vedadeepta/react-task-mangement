import boardConstants from '../constants/BoardConstants';

export function boardFetch() {
  return {
    type: boardConstants.fetch
  };
}

export function fetchSuccess(boards) {
  return {
    type: boardConstants.fetchSuccess,
    payload: {
      boards
    }
  };
}

export function fetchFailure(err) {
  return {
    type: boardConstants.fetchFailure,
    payload: {
      error: err
    }
  };
}

export function addTask(row, col, task) {
  return {
    type: boardConstants.addTask,
    payload: {
      row,
      col,
      task
    }
  };
}
