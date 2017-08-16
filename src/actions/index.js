import axios from 'axios';

const API_KEY = '0e065a440e096fd332fabacd2baf0e7d';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//action creator returns an ection object
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios .get(url);
	return {
		type: FETCH_WEATHER,
		payload : request
	};
}