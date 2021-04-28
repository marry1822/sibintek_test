import axios from "axios";

const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const getUsersAPI = {
	getUsers() {
		return instance.get().then((response) => response.data);
	},
};
