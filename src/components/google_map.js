import React, {Component} from 'react';

class GoogleMap extends Component{

	//Integration with Third party library
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center:{
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}



	render(){
		//allows this.refs.map
		return <div ref="map" />;
	}

}

export default GoogleMap;
