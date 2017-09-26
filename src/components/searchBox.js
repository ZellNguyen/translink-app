import React, {Component} from 'react';
import { connect } from 'react-redux';
import { store } from '../reducers'
import { submitSearch } from '../actions';
import './searchBox.css'

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ""
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    return (
    <form onSubmit={this._handleSubmit}>
        <input type="text" value={this.state.value} onChange={this._handleChange} placeholder='Search a route number (e.g. 099). Type "all" to show all buses' id="textbox"/>
        <input type="submit" value="Search" id="submit"/>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    store.dispatch(submitSearch(this.state.value));
  }

  _handleChange(event) {
    this.setState({
      value : event.target.value
    })
  }
}

export default SearchBox;
