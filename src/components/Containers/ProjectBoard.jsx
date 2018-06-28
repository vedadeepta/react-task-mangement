import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import DataTable from '../Dumb/DataTable';
/* ACTIONS*/
import { fetchBoards } from '../../actions/BoardActions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class ProjectBoard extends React.Component {
  componentDidMount() {
    const id = this.props.location.pathname.split('/')[2];
    this.props.fetchBoards(id);
  }
  render() {
    const { boards, classes } = this.props;
    return (
      <React.Fragment>
        <h1>Project board</h1>
        <Paper className={classes.root}>
          <DataTable boards={boards} />
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
  classes: PropTypes.object,
  boards: PropTypes.array,
  fetchBoards: PropTypes.func,
  location: PropTypes.object,
  pathname: PropTypes.string
};

export default connect(mapStoreToProps, mapDispatchToProps)(withStyles(styles)(ProjectBoard));
