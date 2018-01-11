import {FETCH_WEATHER} from '../actions/index';

export default funtion(state=[], action){
	switch(action){
		//reducers should not mutate state
		//they should return a new state and return that
		//state.push(action.payload.data) is bad
		//state.concat([action.payload.data]) is good
		//alternatively [state.payload.data, ...state] return [newCity, city, city city]
		//this notation is called dstructuring an array
		case FETCH_WEATHER:
			return [state.payload.data, ...state];

	}

	return state;
}