import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Projects from '../Dumb/Projects';
/* ACTIONS */
import fetchProjects from '../../actions/ProjectAction';

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <Projects projects={this.props.projects} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    projects: store.ProjectReducer.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => {
      dispatch(fetchProjects());
    }
  };
};

ProjectsContainer.propTypes = {
  projects: PropTypes.array,
  fetchProjects: PropTypes.func.isRequired
};

export default connect(mapStoreToProps, mapDispatchToProps)(ProjectsContainer);
