import React from "react";
import s from "../main/Main.module.css";
import { Header } from "../header/Header";
import { TableComponent } from "../table/Table";
import { InfoBlock } from "../infoBlock/InfoBlock";
import { useSelector } from "react-redux";
import { Footer } from "../footer/Footer";

const Main = () => {
	const info = useSelector((state) => state.events.eventInfo);

	return (
		<div className={s.mainContainer}>
			<Header />
			<TableComponent />
			{info.directory && <InfoBlock />}
			<Footer />
		</div>
	);
};

export default Main;
