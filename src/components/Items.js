import React from "react";
import classes from "./Items.module.css";

function Items(props) {
	const { handleDragOver, handleDrop, status, listItemsSorted } = props;

	return (
		<div className={classes.columnStatus}>
			<h3 className={classes.statusHeading}>{status}</h3>
			<div className={classes.list} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, status)}>
				{listItemsSorted}
			</div>
		</div>
	);
}

export default Items;
