import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaskActionDialog extends React.Component {
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
    this.props.actionFunction(this.state.value);
    this.setState({ open: false });
  }

  render() {
    const { action, col } = this.props;
    return (
      <div style={{ marginTop: 20 }}>
        <Button onClick={this.handleClickOpen}>{action} Task</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">{action} Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {action} Task to {col}
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
              {action}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TaskActionDialog.propTypes = {
  action: PropTypes.string.isRequired,
  actionFunction: PropTypes.func.isRequired,
  col: PropTypes.string
};

export default TaskActionDialog;
