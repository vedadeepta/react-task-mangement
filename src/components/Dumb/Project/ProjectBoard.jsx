import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DataTable from '../Data/DataTable';
import withLoader from '../../HOC/withLoader';

const styles = {
  root: {
    width: '100%',
    marginTop: 20,
    overflowX: 'auto',
  },
};

function ProjectBoard(props) {
  return (
    <React.Fragment>
      <Typography
        variant="title"
        gutterBottom
      >
        Projects
      </Typography>
      <Paper className={styles.root}>
        <DataTable boards={props.boards} />
      </Paper>
    </React.Fragment>
  );
}

ProjectBoard.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default withLoader(ProjectBoard);
