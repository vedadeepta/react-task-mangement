import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/* ACTIONS */
import { add } from '../../actions/BoardActions';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.props.add(this.props.row, this.props.col, this.state.value);
    this.setState({ open: false });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Button onClick={this.handleClickOpen}>Add Task</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Add Taak</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add Task to {this.props.col}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task Name"
              fullWidth
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (row, col, task) => {
      dispatch(add(row, col, task));
    }
  };
};

AddTask.propTypes = {
  col: PropTypes.string.isRequired,
  row: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddTask);
