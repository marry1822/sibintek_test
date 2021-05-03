import { getUsersAPI, getEventsAPI } from "../../axios/axios";

export const GET_USERS = "GET_USERS";
export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENT_INFO = "GET_EVENT_INFO";
export const GET_CLICKED_EVENT = "GET_CLICKED_EVENT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

let initialState = {
	users: {},
	events: [],
	eventInfo: {},
	clickedEvent: {},
	isFetching: true,
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
		case GET_CLICKED_EVENT: {
			return { ...state, clickedEvent: action.clickedEvent };
		}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
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

export const getClickedEventAC = (clickedEvent) => ({
	type: GET_CLICKED_EVENT,
	clickedEvent,
});

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});

export const getEventInfo = (eventId) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const res = await getEventsAPI.getEventInfo(eventId);
		dispatch(getEventInfoAC(res));
		dispatch(toggleIsFetching(false));
	};
};

export default tableReducer;
