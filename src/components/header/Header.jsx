import React from "react";
import { useSelector } from "react-redux";
import s from "../header/Header.module.css";
import img from "../../assets/user.svg";
export const Header = () => {
	const user = useSelector((state) => state.events.users);
	return (
		<div className={s.header}>
			<div className={s.header__headerContainer}>
				<div className={s.header__title}>Тестовое задание: Дроздова Мария</div>
				<div className={s.header__userSection}>
					<img src={img} className={s.header__userPhoto} width="30px" />
					<div className={s.header__userName}>{user.full_name}</div>
				</div>
			</div>
		</div>
	);
};
