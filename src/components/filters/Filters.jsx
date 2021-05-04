import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
	filterEventsAC,
	toggleCurrentPageAC,
} from "../../store/reducers/tableReducer";
import s from "../filters/Filters.module.css";

export const Filters = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.events.events);

	const onChangeHandler = (e) => {
		let text = e.target.value;
		let filterFunc = (value) => {
			if (
				value.event_date.indexOf(text) >= 0 ||
				value.login.toString().toLowerCase().indexOf(text) >= 0 ||
				value.full_name.toString().toLowerCase().indexOf(text) >= 0 ||
				value.ip_address.toString().toLowerCase().indexOf(text) >= 0 ||
				value.event_type.toString().toLowerCase().indexOf(text) >= 0 ||
				value.event_result.toString().toLowerCase().indexOf(text) >= 0 ||
				value.object.toString().toLowerCase().indexOf(text) >= 0 ||
				value.event_description.toString().toLowerCase().indexOf(text) >= 0
			)
				return true;
		};

		let filteredInfo = data.filter(filterFunc);
		dispatch(filterEventsAC(filteredInfo));
		dispatch(toggleCurrentPageAC(1));
	};

	return (
		<div className={s.filter_container}>
			<input placeholder="Найти..." type="text" onChange={onChangeHandler} />
		</div>
	);
};
