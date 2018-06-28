import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskActionDialog from '../Dumb/TaskActionDialog';

/* ACTIONS */
import { add } from '../../actions/BoardActions';


function Add(props) {
  return (
    <TaskActionDialog
      action={'Add'}
      col={props.col}
      actionFunction={(value) => {
        props.add(props.row, props.col, value);
      }}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (row, col, task) => {
      dispatch(add(row, col, task));
    }
  };
};

Add.propTypes = {
  col: PropTypes.string.isRequired,
  row: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Add);
