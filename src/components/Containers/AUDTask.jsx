import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskActionDialog from '../Dumb/Tasks/TaskActionDialog';

/* ACTIONS */
import {
  taskAdd,
  taskUpdate,
  taskDelete,
  memberAdd
} from '../../actions/BoardActions';


function Add(props) {
  return (
    <TaskActionDialog
      action={'Add'}
      msg={`Add task to ${props.col}`}
      actionFunction={(value) => {
        props.taskAdd(props.row, props.col, value);
      }}
    />
  );
}

function Update(props) {
  return (
    <TaskActionDialog
      action={'Update'}
      msg={`Update task ${props.oldTask}`}
      actionFunction={(value) => {
        props.taskUpdate(props.row, props.col, props.oldTask, value);
      }}
    />
  );
}

function Delete(props) {
  return (
    <TaskActionDialog
      action={'Delete'}
      msg={`Are you sure you want to delete ${props.oldTask}`}
      actionFunction={() => {
        props.taskDelete(props.row, props.oldTask);
      }}
    />
  );
}

function AddMember(props) {
  return (
    <TaskActionDialog
      action={'Add members'}
      msg={'Member name'}
      actionFunction={(value) => {
        props.memberAdd(value);
      }}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    taskAdd: (row, col, task) => {
      dispatch(taskAdd(row, col, task));
    },
    taskUpdate: (row, col, oldTask, newTask) => {
      dispatch(taskUpdate(row, col, oldTask, newTask));
    },
    taskDelete: (row, task) => {
      dispatch(taskDelete(row, task));
    },
    memberAdd: (value) => {
      dispatch(memberAdd(value));
    }
  };
};

Add.propTypes = {
  col: PropTypes.string.isRequired,
  row: PropTypes.string.isRequired,
  taskAdd: PropTypes.func.isRequired,
};

Update.propTypes = {
  col: PropTypes.string.isRequired,
  row: PropTypes.string.isRequired,
  oldTask: PropTypes.string.isRequired,
  taskUpdate: PropTypes.func.isRequired,
};

Delete.propTypes = {
  oldTask: PropTypes.string.isRequired,
  row: PropTypes.string.isRequired,
  taskDelete: PropTypes.func.isRequired,
};

AddMember.propTypes = {
  memberAdd: PropTypes.func.isRequired
};

const AddComponent = connect(null, mapDispatchToProps)(Add);
const UpdateComponent = connect(null, mapDispatchToProps)(Update);
const DeleteComponent = connect(null, mapDispatchToProps)(Delete);
const AddMemberComponent = connect(null, mapDispatchToProps)(AddMember);

export {
  AddComponent,
  UpdateComponent,
  DeleteComponent,
  AddMemberComponent
};
