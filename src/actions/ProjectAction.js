import ProjectApi from '../api/ProjectApi';
import {
  projectFetch,
  fetchSuccess,
  fetchFailure
} from '../actionCreator/ProjectActionCreator';

const fetchProjects = () => (dispatch) => {
  dispatch(projectFetch());
  const apiObj = new ProjectApi();
  apiObj.fetch()
    .then((res) => {
      dispatch(fetchSuccess(res.data.projects));
    })
    .catch((err) => {
      dispatch(fetchFailure(err));
    });
};

export default fetchProjects;
