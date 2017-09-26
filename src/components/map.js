import React, { Component } from 'react';
import MapGL, { Marker, InteractiveMap} from 'react-map-gl';
import MapPin from './mapPin'
import './map.css';
import { connect } from 'react-redux';

const vancouver = {latitude: 49.266991, longitude: -123.089764, zoom: 14};
const MAP_TOKEN = process.env.REACT_APP_MAPBOX;

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				width: window.innerWidth,
				height: window.innerHeight,
				latitude: vancouver.latitude,
				longitude: vancouver.longitude,
				bearing: 0,
				zoom: vancouver.zoom
			},
			settings: {
	      dragPan: true,
	      dragRotate: true,
	      scrollZoom: true,
	      touchZoomRotate: true,
	      doubleClickZoom: true,
	      minZoom: 0,
	      maxZoom: 20,
	      minPitch: 0,
	      maxPitch: 85
    	}
		};
	}

	_onViewportChange = viewport => this.setState({viewport});

	render() {
		const {bus, viewport, settings} = this.state;
		const buses = this.props.buses;
		return (
			<InteractiveMap
	          {...viewport}
						{...settings}
	          mapStyle="mapbox://styles/mapbox/basic-v9"
	          mapboxApiAccessToken={MAP_TOKEN}
						onViewportChange={this._onViewportChange}>

						{this.props.buses.length > 0 &&
							this.props.buses.map( (bus) => (
							<MapPin key={bus.no} no={bus.no} latitude={bus.latitude} longitude={bus.longitude}/>
						))}

			</InteractiveMap>
    );
	}

}

Map.defaultProps = {
	buses : []
}

const mapStateToProps = state => {
  return {
    buses: state.busReducer.buses
  };
}

export default connect(mapStateToProps)(Map);
