import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import ListItem from '@material-ui/core/ListItem';
import Add from '../Containers/AUDTask';


class DataCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const { tasks, type, assigned } = this.props;
    return (
      <TableCell style={{ height: 80 }}>
        <ListItem button dense style={{ maxWidth: 200 }}>
          <div>
            {tasks.length ? tasks.toString() : 'no task'}
            <Add row={assigned} col={type} />
          </div>
        </ListItem>
      </TableCell>
    );
  }
}

DataCell.propTypes = {
  tasks: PropTypes.array.isRequired,
  assigned: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default DataCell;
