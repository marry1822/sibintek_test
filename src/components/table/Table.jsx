import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	getEventInfo,
	getClickedEventAC,
} from "../../store/reducers/tableReducer";
import s from "../table/Table.module.css";

const useSortableData = (items, config = null) => {
	const [sortConfig, setSortConfig] = React.useState(config);

	const sortedItems = React.useMemo(() => {
		let sortableItems = [...items];
		if (sortConfig !== null) {
			sortableItems.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === "ascending" ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === "ascending" ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [items, sortConfig]);

	const requestSort = (key) => {
		let direction = "ascending";
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	return { items: sortedItems, requestSort, sortConfig };
};

export const TableComponent = () => {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.events.events);

	const onEventSelect = (item) => {
		dispatch(getClickedEventAC(item));
		dispatch(getEventInfo(item.id));
	};

	const { items, requestSort, sortConfig } = useSortableData(events);
	const getClassNamesFor = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};

	return (
		<div className={s.tableContainer}>
			<Table bordered striped hover size="sm">
				<thead>
					<tr>
						<th
							onClick={() => requestSort("event_date")}
							className={getClassNamesFor("event_date")}
						>
							Дата события
						</th>
						<th
							onClick={() => requestSort("login")}
							className={getClassNamesFor("login")}
						>
							Логин
						</th>
						<th
							onClick={() => requestSort("full_name")}
							className={getClassNamesFor("full_name")}
						>
							Полное имя
						</th>
						<th
							onClick={() => requestSort("ip_address")}
							className={getClassNamesFor("ip_address")}
						>
							IP-адрес
						</th>
						<th
							onClick={() => requestSort("event_type")}
							className={getClassNamesFor("event_type")}
						>
							Тип события
						</th>
						<th
							onClick={() => requestSort("event_result")}
							className={getClassNamesFor("event_result")}
						>
							Результат события
						</th>
						<th
							onClick={() => requestSort("object")}
							className={getClassNamesFor("object")}
						>
							Объект, с которым произошло действие
						</th>
						<th
							onClick={() => requestSort("event_description")}
							className={getClassNamesFor("event_description")}
						>
							Описание события
						</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id} onClick={() => onEventSelect(item)}>
							<td>{item.event_date}</td>
							<td>{item.login}</td>
							<td>{item.full_name}</td>
							<td>{item.ip_address}</td>
							<td>{item.event_type}</td>
							<td>{item.event_result}</td>
							<td>{item.object}</td>
							<td>{item.event_description}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};
