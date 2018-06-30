import {
  login,
  logout
} from '../actionCreator/LoginActionCreator';
import { setError } from '../actionCreator/ErrorActionCreator';
import { loginApi, checkIfLoggedApi, logoutApi } from '../api/LoginApi';

const doLogin = () => (dispatch) => {
  loginApi()
    .then(() => dispatch(login()))
    .catch(err => dispatch(setError(err)));
};

const ifLogged = () => (dispatch) => {
  checkIfLoggedApi((user) => {
    if (user) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  });
};

const doLogout = () => (dispatch) => {
  logoutApi()
    .then(() => dispatch(logout))
    .catch(err => dispatch(setError(err)));
};

export {
  doLogin,
  ifLogged,
  doLogout
};
