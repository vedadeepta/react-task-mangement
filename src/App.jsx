import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import ProjectsContainer from './components/Containers/ProjectsContainer';
import ProjectBoard from './components/Containers/ProjectBoard';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={ProjectsContainer} />
        <Route path="/projects/:id?" component={ProjectBoard} />
      </React.Fragment>
    </Router>
  );
}

export default App;
