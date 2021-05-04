import React from "react";
import s from "../footer/Footer.module.css";

export const Footer = () => {
	return (
		<div className={s.footer}>
			<div className={s.footer_container}>
				<a href="https://github.com/marry1822">GitHub</a>
				<a href="https://www.linkedin.com/in/mariiadrozdova/?locale=ru_RU">
					LinkedIn
				</a>
			</div>
		</div>
	);
};
