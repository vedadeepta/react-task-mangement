import boardConstants from '../constants/BoardConstants';

export function findAndRemoveTask(obj, task) {
  const taskObj = JSON.parse(JSON.stringify(obj));
  const validKeys = ['pending', 'progress', 'completed', 'approved'];
  Object.keys(taskObj).forEach((k) => {
    if (validKeys.includes(k) && taskObj[k].includes(task)) {
      const index = taskObj[k].findIndex(e => e === task);
      taskObj[k] = taskObj[k]
                    .slice(0, index)
                    .concat(taskObj[k].slice(index + 1));
    }
  });
  return taskObj;
}

const intialState = {
  boards: [],
  isLoading: true,
  error: ''
};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case boardConstants.fetch: {
      return Object.assign(
        {},
        state,
        {
          isLoading: true
        }
      );
    }
    case boardConstants.fetchSuccess: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          boards: action.payload.boards
        }
      );
    }

    case boardConstants.fetchFailure: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          error: action.payload.error
        }
      );
    }

    case boardConstants.addTask: {
      const row = action.payload.row;
      const col = action.payload.col;
      const task = action.payload.task;
      const filterPerson = state.boards.filter(b => b.assigned === row)[0];
      const rowIndex = state.boards.findIndex(b => b.assigned === row);
      const newTaskObj = findAndRemoveTask(filterPerson, task);
      newTaskObj[col].push(task);
      const newBoard = state.boards
                              .slice(0, rowIndex)
                              .concat(newTaskObj)
                              .concat(state.boards.slice(rowIndex + 1));

      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    default: return state;
  }
}
