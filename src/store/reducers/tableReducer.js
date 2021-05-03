import { getUsersAPI, getEventsAPI } from "../../axios/axios";

export const GET_USERS = "GET_USERS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENT_INFO = "GET_EVENT_INFO";

let initialState = {
	users: [],
	events: [],
	eventInfo: {},
};

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS: {
			return { ...state, users: action.users };
		}
		case GET_EVENTS: {
			return { ...state, events: action.events };
		}
		case GET_EVENT_INFO: {
			return { ...state, eventInfo: action.eventInfo };
		}
		default:
			return state;
	}
};

export const getUsersAC = (users) => ({
	type: GET_USERS,
	users,
});

export const getEventsAC = (events) => ({
	type: GET_EVENTS,
	events,
});

export const getEventInfoAC = (eventInfo) => ({
	type: GET_EVENT_INFO,
	eventInfo,
});

export const getUsers = (userId) => {
	return async (dispatch) => {
		const res = await getUsersAPI.getUsers(userId);
		console.log(res);
		dispatch(getUsersAC(res));
	};
};

export const getEvents = () => {
	return async (dispatch) => {
		const res = await getEventsAPI.getEvents();
		console.log(res);
		dispatch(getEventsAC(res));
	};
};

export const getEventInfo = (eventId) => {
	return async (dispatch) => {
		const res = await getEventsAPI.getEventInfo(eventId);
		console.log(res);
		dispatch(getEventInfoAC(res));
	};
};

export default tableReducer;
