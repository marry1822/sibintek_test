import React from "react";
import s from "../main/Main.module.css";
import { Header } from "../header/Header";
import { TableComponent } from "../table/Table";
import { InfoBlock } from "../infoBlock/InfoBlock";
import { useSelector } from "react-redux";
import { Filters } from "../filters/Filters";

const Main = () => {
	const info = useSelector((state) => state.events.eventInfo);

	return (
		<div className={s.main_container}>
			<Header />
			<Filters />
			<TableComponent />
			{info.directory && <InfoBlock />}
		</div>
	);
};

export default Main;
