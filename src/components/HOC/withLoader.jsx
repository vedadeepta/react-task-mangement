import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinearIndeterminate from '../Dumb/Progress/LinearIndeterminate';
import errorReset from '../../actions/ErrorActions';
/*eslint-disable*/
const withLoader = (Wrapped) => {
  class LoaderHOC extends React.Component {
    componentWillUnmount() {
      this.props.errorReset();
    }
    render() {
      console.log("loading",this.props.isLoading)
      console.log("error",this.props.error)

      if (this.props.isLoading && !this.props.error) {
        return <LinearIndeterminate />;
      }
      if (!this.props.isLoading && !this.props.error) {
        console.log("here")    
        return <Wrapped {...this.props} />;
      }
      return <h1>error</h1>
    }
  }
  const mapStateToProps = (store) => {
    return {
      error: store.ErrorReducer.error
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      errorReset: () => {
        dispatch(errorReset());
      }
    };
  }

  LoaderHOC.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    errorReset: PropTypes.func.isRequired
  };

  return connect(mapStateToProps, mapDispatchToProps)(LoaderHOC);
};

export default withLoader;
