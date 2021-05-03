import React from "react";
import { useSelector } from "react-redux";
import s from "../infoBlock/InfoBlock.module.css";
import Preloader from "../preloader/Preloader";

export const InfoBlock = () => {
	const eventInfo = useSelector((state) => state.events.eventInfo);
	const clickedEvent = useSelector((state) => state.events.clickedEvent);

	return (
		<div className={s.infoBlock_container}>
			<div>Подробная информация о событии</div>
			<div>
				<div>
					<span>Объект: {eventInfo.directory}</span>
				</div>
				<div>
					<span>ID директории: {eventInfo.path_id}</span>
				</div>
				<div>
					<span>На доступ к объекту:{clickedEvent.object} </span>
				</div>
				<div>
					<span>ID группы: {eventInfo.group_id}</span>
				</div>
				<div>
					<span>Группа: {eventInfo.group}</span>
				</div>
				<div>
					Доступ:
					{eventInfo.access && (
						<span>
							{eventInfo.access[0]}, {eventInfo.access[1]}
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
