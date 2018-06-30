import loginConstants from '../constants/LoginConstants';

export function login() {
  return {
    type: loginConstants.login
  };
}

export function logout() {
  return {
    type: loginConstants.logout
  };
}
