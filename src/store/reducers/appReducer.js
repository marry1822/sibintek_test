import { getEventsAPI, getUsersAPI } from "../../axios/axios";
import { getEventsAC, getUsersAC } from "./tableReducer";

export const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

let initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE_SUCCESS:
			return {
				...state,
				initialized: action.initialized,
			};
		default:
			return state;
	}
};

export const initializedSuccess = (initialized) => ({
	type: INITIALIZE_SUCCESS,
	initialized,
});

export const initializeApp = (userId) => {
	return async (dispatch) => {
		dispatch(initializedSuccess(false));
		const res = await getEventsAPI.getEvents();
		dispatch(getEventsAC(res));
		const result = await getUsersAPI.getUsers(userId);
		dispatch(getUsersAC(result));
		dispatch(initializedSuccess(true));
	};
};

export default appReducer;
