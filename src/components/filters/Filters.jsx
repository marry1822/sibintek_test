import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
	filterEventsAC,
	toggleCurrentPageAC,
} from "../../store/reducers/tableReducer";

export const Filters = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.events.events);

	const onChangeHandler = (e) => {
		let text = e.target.value;
		let filterFunc = (value) => {
			if (
				value.event_date.indexOf(text) >= 0 ||
				value.login.toString().indexOf(text) >= 0 ||
				value.full_name.indexOf(text) >= 0 ||
				value.ip_address.indexOf(text) >= 0 ||
				value.event_type.indexOf(text) >= 0 ||
				value.event_result.indexOf(text) >= 0 ||
				value.object.indexOf(text) >= 0 ||
				value.event_description.indexOf(text) >= 0
			)
				return true;
		};

		let filteredInfo = data.filter(filterFunc);
		dispatch(filterEventsAC(filteredInfo));
		dispatch(toggleCurrentPageAC(1));
	};

	return (
		<div>
			<input placeholder="Найти..." type="text" onChange={onChangeHandler} />
		</div>
	);
};
