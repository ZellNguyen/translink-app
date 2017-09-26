import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Map from './map';
import MapController from './map-controller'
import SearchBox from './searchBox';
import { connect } from 'react-redux';
import './spinner.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="top left" id="searchBox">
          <SearchBox />
          <p>{this.props.err.toString()}</p>
          <div className={ this.props.isLoading ? ("loader"): ("")}></div>
        </div>
        <Map /> <MapController />
      </div>
    );
  }
}

App.defaultProps = {
	err : ""
}

const mapStateToProps = state => {
  return {
    err: state.errorReducer.err,
    isLoading: state.loadingReducer.isLoading
  };
}

export default connect(mapStateToProps)(App);
