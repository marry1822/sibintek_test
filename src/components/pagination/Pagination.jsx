import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCurrentPageAC } from "../../store/reducers/tableReducer";

export const PaginationComponent = (props) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.events.events);
	const pagesCount = Math.ceil(data.length / props.perPage);
	let active = props.currentPage;
	let items = [];
	for (let number = 1; number <= pagesCount; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === active}
				onClick={() => onPageChange(number)}
			>
				{number}
			</Pagination.Item>
		);
	}

	const onPageChange = (page) => {
		dispatch(toggleCurrentPageAC(page));
	};
  
	return (
		<div>
			<Pagination>{items}</Pagination>
		</div>
	);
};
