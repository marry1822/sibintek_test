import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Main from "./components/main/Main";
import Preloader from "./components/preloader/Preloader";
import { initializeApp } from "./store/reducers/appReducer";
import store from "./store/store";

const App = () => {
	const dispatch = useDispatch();
	const init = useSelector((state) => state.initialize.initialized);
	useEffect(() => {
		dispatch(initializeApp());
	}, [dispatch]);

	return (
		<div>
			{!init && <Preloader />}
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
