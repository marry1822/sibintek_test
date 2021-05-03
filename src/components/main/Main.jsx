import React from "react";
import s from "../main/Main.module.css";
import { Header } from "../header/Header";
import { TableComponent } from "../table/Table";
import { InfoBlock } from "../infoBlock/InfoBlock";

const Main = () => {
	return (
		<div className={s.main_container}>
			<Header />
			<TableComponent />
			<InfoBlock />
		</div>
	);
};

export default Main;
