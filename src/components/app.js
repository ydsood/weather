import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
//0e065a440e096fd332fabacd2baf0e7d
export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
