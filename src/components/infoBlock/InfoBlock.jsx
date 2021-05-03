import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventInfo } from "../../store/reducers/tableReducer";

export const InfoBlock = (props) => {
	// const dispatch = useDispatch();
	const eventInfo = useSelector((state) => state.events.eventInfo);
	console.log(eventInfo);

	return (
		<div>
			<div>Подробная информация о событии</div>

			<div>
				<div>
					{" "}
					<span>Объект: {eventInfo.title}</span>
				</div>
				<div>
					{" "}
					<span>ID директории: {eventInfo.body}</span>
				</div>
				{/* <div>
					{" "}
					<span>На доступ к объекту:</span>
				</div>
				<div>
					{" "}
					<span>ID группы:</span>
				</div>
				<div>
					{" "}
					<span>Группа:</span>
				</div>
				<div>
					{" "}
					<span>Доступ:</span>
				</div> */}
			</div>
		</div>
	);
};
