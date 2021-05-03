import React from "react";
import classes from "./Preloader.module.css";
let Preloader = () => {
	return (
		<div className={classes.ldsSpinner + " " + classes.preloader}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Preloader;
