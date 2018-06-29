import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import ListItem from '@material-ui/core/ListItem';
import { AddComponent } from '../../Containers/AUDTask';
import TaskDetailDialog from '../Tasks/TaskDetailDialog';

function DataCell(props) {
  const { tasks, type, assigned } = props;
  return (
    <TableCell style={{ height: 80 }}>
      <TaskDetailDialog tasks={tasks} row={assigned} col={type}>
        <ListItem button dense style={{ maxWidth: 200 }}>
          <div>
            {tasks.length ? tasks.toString() : 'no task'}
            <AddComponent row={assigned} col={type} />
          </div>
        </ListItem>
      </TaskDetailDialog>
    </TableCell>
  );
}

DataCell.propTypes = {
  tasks: PropTypes.array.isRequired,
  assigned: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default DataCell;
