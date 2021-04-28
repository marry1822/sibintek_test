import { getUsersAPI } from "../../axios/axios";

export const GET_USERS = "GET_USERS";

let initialState = {
	users: [],
};

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS: {
			return { ...state, users: action.users };
		}
		default:
			return state;
	}
};

export const getUsersAC = (users) => ({
	type: GET_USERS,
	users
});

export const getUsers = () => {
	return async (dispatch) => {
		const res = await getUsersAPI.getUsers();
		console.log(res);
		dispatch(getUsersAC(res));
	};
};

export default tableReducer;
