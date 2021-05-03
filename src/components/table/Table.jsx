import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getEventInfo } from "../../store/reducers/tableReducer";

export const Table = () => {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.events.events);
	console.log(events);

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);

	const onClickHandler = () => {
		const eventId = 1;
		dispatch(getEventInfo(eventId));
	};

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Дата события</th>
						<th>Логин</th>
						<th>Полное имя</th>
						<th>IP-адрес</th>
						<th>Тип события</th>
						<th>Результат события</th>
						<th>Объект, с которым произошло действие</th>
						<th>Описание события</th>


					</tr>
				</thead>
				<tbody>
					{events.map((item) => (
						<tr key={item.id}>
							<td>{item.event_date}</td>
							<td>{item.login}</td>
							<td>{item.full_name}</td>
							<td>{item.ip_address}</td>
							<td>{item.event_type}</td>
							<td>{item.event_result}</td>
							<td>{item.id}</td>
							<td>{item.title}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={onClickHandler}>click</button>
		</div>
	);
};
