import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import ListItem from '@material-ui/core/ListItem';
import { AddComponent } from '../../Containers/AUDTask';
import TaskDetailDialog from '../Tasks/TaskDetailDialog';
import DraggableContainer from '../../Containers/DraggableContainer';

function DataCell(props) {
  const { tasks, type, assigned } = props;
  return (
    <TableCell style={{ height: 80 }}>
      <DraggableContainer targetPerson={assigned} targetCol={type}>
        <TaskDetailDialog row={assigned} col={type} tasks={tasks}>
          <ListItem button dense style={{ maxWidth: 200 }}>
            {tasks.length ? tasks.toString() : 'no task'}
            <AddComponent row={assigned} col={type} />
          </ListItem>
        </TaskDetailDialog>
      </DraggableContainer>
    </TableCell>
  );
}

DataCell.propTypes = {
  tasks: PropTypes.array.isRequired,
  assigned: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default DataCell;
