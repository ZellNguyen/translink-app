import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import marker from './map-marker.svg';

class MapPin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this._onHover = this._onHover.bind(this);
    this._offHover = this._offHover.bind(this);
  }
  render() {
    return (
      <Marker latitude={this.props.latitude} longitude={this.props.longitude}>
        <div className="marker"
          onMouseEnter={this._onHover} onMouseLeave={this._offHover}>
          <img src={marker} alt="marker"/>
          {// Hover to see the vehicle number
            this.state.hover ? (
              <div>{this.props.no}</div>
              ) : (
              <div></div>
          )}
        </div>
      </Marker>
    )
  }
  _onHover() {
    this.setState({hover:true});
  }

  _offHover() {
    this.setState({hover: false});
  }
}

export default MapPin;
