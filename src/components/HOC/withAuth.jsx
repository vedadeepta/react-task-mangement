import React from 'react';
import firebase from 'firebase';
import config from '../../config';
import Login from '../Dumb/Login';
import LinearIndeterminate from '../Dumb/Progress/LinearIndeterminate';

firebase.initializeApp(config);

function withAuth(Wrapped) {
  return class LoginHOC extends React.Component {

    constructor() {
      super();
      this.state = {
        logged: null,
        error: ''
      };
      this.login = this.login.bind(this);
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ logged: true });
        } else {
          this.setState({ logged: false });
        }
      });
    }

    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
                      .then(() => this.setState({ logged: true }))
                      .catch(error => this.setState({ logged: false, error }));
    }

    render() {
      if (this.state.logged === null) {
        return <LinearIndeterminate />;
      } else if (this.state.logged) {
        return <Wrapped />;
      }
      return <Login login={this.login} />;
    }
  };
}

export default withAuth;
