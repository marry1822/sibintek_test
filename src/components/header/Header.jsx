import React from "react";
import { useSelector } from "react-redux";
import s from "../header/Header.module.css";

export const Header = () => {
	const user = useSelector((state) => state.events.users);
	return (
		<div className={s.header}>
			<div className={s.header__headerContainer}>
				<div className={s.header__userName}>Directory Name</div>
				<div className={s.header__userName}>{user.full_name}</div>
			</div>
		</div>
	);
};
