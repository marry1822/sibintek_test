import React from "react";
import { Provider } from "react-redux";
import Main from "./components/main/Main";
import store from "./store/store";

const App = () => {
	return (
		<div>
			<Main />
		</div>
	);
};

const MainApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default MainApp;
