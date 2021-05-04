import React from "react";
import { useSelector } from "react-redux";
import s from "../infoBlock/InfoBlock.module.css";

export const InfoBlock = () => {
	const eventInfo = useSelector((state) => state.events.eventInfo);
	const clickedEvent = useSelector((state) => state.events.clickedEvent);

	return (
		<div className={s.infoBlockContainer}>
			<div className={s.infoBlockContainer_title}>
				Подробная информация о событии
			</div>
			<div className={s.infoBlockContainer_info}>
				<div>
					<span>Объект: </span>
					{eventInfo.directory}
				</div>
				<div>
					<span>ID директории: </span>
					{eventInfo.path_id}
				</div>
				<div>
					<span>На доступ к объекту: </span>
					{clickedEvent.object}
				</div>
				<div>
					<span>ID группы: </span>
					{eventInfo.group_id}
				</div>
				<div>
					<span>Группа: </span>
					{eventInfo.group}
				</div>
				<div>
					{eventInfo.access && (
						<p>
							<span>Доступ: </span>
							{eventInfo.access[0]}, {eventInfo.access[1]}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
