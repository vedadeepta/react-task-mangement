import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Projects from '../Dumb/Project/Projects';
import fetchProjects from '../../actions/ProjectAction';

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <Projects {...this.props} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    projects: store.ProjectReducer.projects,
    isLoading: store.ProjectReducer.isLoading
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
  fetchProjects: PropTypes.func.isRequired,
};

export default connect(mapStoreToProps, mapDispatchToProps)(ProjectsContainer);
