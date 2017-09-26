import React, { Component } from 'react';
import { store } from '../reducers';
import Map from './map';
import request from 'superagent';
import { updateBus, reportError, load } from '../actions';
import { connect } from 'react-redux';

const TRANSLINK_KEY = process.env.REACT_APP_TRANSLINK;

class MapController extends Component {
  constructor(props) {
    super(props);

    //Binding
		this._updateBus	 = this._updateBus.bind(this);
  }

  render() {
    return null;
  }

  _updateBus(){
    // Search value
    var searchVal = this.props.search;
    console.log(searchVal);

    // Special cases
    if(searchVal == "") { // Empty search value
      store.dispatch(updateBus([]));
      store.dispatch(load(false));
      return;
    }

    if(searchVal.toLowerCase() == "all") searchVal = ""; // Search all buses

		const proxyurl = "https://cors-anywhere.herokuapp.com/"; //  Fix No ‘Access-Control-Allow-Origin’ error
		const url = `http://api.translink.ca/rttiapi/v1/buses`;
		request
			.get(proxyurl + url)
			.query({ apikey : TRANSLINK_KEY })
			.query({ routeNo : searchVal })
			.type('application/json')
			.accept('application/json')
			.end((err, res) => {
        // Remove spinner
        store.dispatch(load(false));

				if(err) {
          console.log(err);
          // report error message
          store.dispatch(reportError(err));
          store.dispatch(updateBus([]));
          return;
        }

        // Clear error message
        store.dispatch(reportError(""));

				var busData = [];
        try {
  				const data = res.body;
  				data.forEach(item => {
  					const newMarker = {no: item.VehicleNo, latitude : item.Latitude, longitude : item.Longitude};
   					busData = [...busData, newMarker];
  				});
        } catch(err) {
          store.dispatch(reportError("Connection Error"));
          return;
        }

        // Dispatch bus data to store
				store.dispatch(updateBus(busData))
			});
	}

	componentDidUpdate(prevProps, prevState){
    // Start loading
    store.dispatch(load(true));

    // clear previous interval
    clearInterval(this.interval);

    // Keep updating every 2 minute
		this._updateBus();
    this.interval = setInterval(this._updateBus, 120000);
	}

	componentWillUnmount() {

	}
}

MapController.defaultProps = {
  search : "084"
}

const mapStateToProps = state => {
  return {
    search: state.searchReducer.search
  };
}

export default connect(mapStateToProps)(MapController);
