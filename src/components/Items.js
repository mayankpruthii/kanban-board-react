import React from "react";
import classes from "./Items.module.css";

function Items(props) {
	const { handleDragOver, handleDrop, status, listItemsSorted } = props;

	return (
		<div className={classes.columnStatus}>
			<h3 className={classes.statusHeading}>{status}</h3>
			<div className={classes.list}>
				{listItemsSorted.length !== 0 ? (
					<div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, status)}>
						{listItemsSorted}
					</div>
				) : (
					<div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, status)}>
						Add items here
					</div>
				)}
				<div className={classes.addListItem}>
					<input placeholder="Add new task here" type="text" />
					<button clasName={classes.addListItemButton}>Add</button>
				</div>
			</div>
		</div>
	);
}

export default Items;
