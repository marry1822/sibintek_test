import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterEventsAC } from "../../store/reducers/tableReducer";

export const Filters = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const onChangeHandler = (e) => {
		setText(e.target.value);
		dispatch(filterEventsAC(text));
	};

	return (
		<div>
			<input placeholder="Найти..." type="text" onChange={onChangeHandler} />
		</div>
	);
};
