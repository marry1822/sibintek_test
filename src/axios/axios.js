import axios from "axios";

const instance = axios.create({
	baseURL: "https://sibintek-test.herokuapp.com/",
});

export const getUsersAPI = {
	getUsers() {
		return instance.get("user").then((response) => response.data);
	},
};

export const getEventsAPI = {
	getEvents() {
		return instance.get("events").then((response) => response.data);
	},
	getEventInfo(eventId) {
		return instance
			.get(`events_info?id=${eventId}`)
			.then((response) => response.data);
	},
};
