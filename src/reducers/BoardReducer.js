import boardConstants from '../constants/BoardConstants';
import {
  findAndRemoveTask,
  ifExist
} from './reducerUtils';

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
      const { row, col, task } = action.payload;
      const filterPerson = state.boards.filter(b => b.assigned === row)[0];
      const rowIndex = state.boards.findIndex(b => b.assigned === row);
      const newTaskObj = findAndRemoveTask(filterPerson, task);
      if (!newTaskObj[col]) {
        newTaskObj[col] = [];
      }
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

    case boardConstants.updateTask: {
      const { row, col, oldTask, newTask } = action.payload;
      const filterPerson = state.boards.filter(b => b.assigned === row)[0];
      const rowIndex = state.boards.findIndex(b => b.assigned === row);
      if (ifExist(filterPerson, newTask)) {
        return Object.assign(
          {},
          state,
          {
            error: `${newTask} already exists`
          }
        );
      }
      const newTaskArray = filterPerson[col].map((task) => {
        if (task === oldTask) {
          return newTask;
        }
        return task;
      });
      filterPerson[col] = newTaskArray;
      const newBoard = state.boards
                              .slice(0, rowIndex)
                              .concat(filterPerson)
                              .concat(state.boards.slice(rowIndex + 1));
      return Object.assign(
        {},
        state,
        {
          boards: newBoard
        }
      );
    }

    case boardConstants.deleteTask: {
      const { row, task } = action.payload;
      const filterPerson = state.boards.filter(b => b.assigned === row)[0];
      const rowIndex = state.boards.findIndex(b => b.assigned === row);
      const newTaskObj = findAndRemoveTask(filterPerson, task);
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

    case boardConstants.addMembers: {
      const { name } = action.payload;
      const membersWithSameName = state.boards.filter(b => b.assigned === name);
      if (membersWithSameName.length) {
        return Object.assign(
          {},
          state,
          {
            error: `Member with ${name} already exists`
          }
        );
      }
      const newTaskObj = { assigned: name };
      const newBoard = state.boards
                                .slice(0, state.boards.length - 1)
                                .concat(newTaskObj)
                                .concat(state.boards.slice(state.boards.length - 1));

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
