import React from "react";

import { getUsers } from "../../store/reducers/tableReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../header/Header";

const Main = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.events.users);
	console.log(users);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div>
			<Header />
		</div>
	);
};

export default Main;
