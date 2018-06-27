import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddTask from './AddTask';
/* ACTIONS*/
import { fetchBoards } from '../../actions/BoardActions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    textAlign: 'left'
  },
  cell: {
    height: 80
  }
});

class ProjectBoard extends React.Component {
  componentDidMount() {
    const id = this.props.location.pathname.split('/')[2];
    this.props.fetchBoards(id);
  }
  render() {
    const { classes } = this.props;
    const { boards } = this.props;
    return (
      <React.Fragment>
        <h1>Project board</h1>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Members</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>Approved</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boards.map((b) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.cell}>
                      {b.assigned}
                    </TableCell>
                    <TableCell className={classes.cell}>
                      {b.pending ? b.pending.toString() : 'no task'}
                      <AddTask row={b.assigned} col={'pending'} />
                    </TableCell>
                    <TableCell className={classes.cell}>
                      {b.progress ? b.progress.toString() : 'no task'}
                      <AddTask row={b.assigned} col={'progress'} />
                    </TableCell>
                    <TableCell className={classes.cell}>
                      {b.completed ? b.completed.toString() : 'no task'}
                      <AddTask row={b.assigned} col={'completed'} />
                    </TableCell>
                    <TableCell className={classes.cell}>
                      {b.approved ? b.approved.toString() : 'no task'}
                      <AddTask row={b.assigned} col={'approved'} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    boards: store.BoardReducer.boards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: (id) => {
      dispatch(fetchBoards(id));
    }
  };
};

ProjectBoard.propTypes = {
  boards: PropTypes.array,
  classes: PropTypes.object,
  fetchBoards: PropTypes.func,
  location: PropTypes.object,
  pathname: PropTypes.string
};

export default connect(mapStoreToProps, mapDispatchToProps)(withStyles(styles)(ProjectBoard));
