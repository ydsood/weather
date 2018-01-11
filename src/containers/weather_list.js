import React, { Component } from 'react';
import { connect } from 'react-redux';


import Chart from '../'
import GoogleMap from '../'

class WeatherList extends Component{
	
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
				<tr key={name}>
					<td> <GoogleMap /> </td>
					<td>
						<Charts data={temps} color="orange" units="K" />
						<Charts data={pressures} color="green" units="hPa" />
						<Charts data={humidities} color="black" units="%"/>
					</td>
				</tr>
			);
	}


	render(props){
		console.log(this.props);
		if(this.props.weather){
			return(
					<table className="table table-hover">
						<thead>
							<tr>
								<th>City</th>
								<th>Temperature (K)</th>
								<th>Pressure (hPa)</th>
								<th>Humidity (</th>
							</tr>
						</thead>
						<tbody>
							{this.props.weather.map(this.renderWeather)}
						</tbody>
					</table>
				);
		}
		else{
			return <div></div>;
		}			
	}
}

function mapStateToProps({ weather }){
	return {weather}; //returns {weather : weather.value}
}

export default connect(mapStateToProps)(WeatherList);