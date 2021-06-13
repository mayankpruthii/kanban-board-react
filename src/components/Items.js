import React, { useRef } from "react";
import classes from "./Items.module.css";

function Items(props) {
	const newListItem = useRef(null);

	const { handleDragOver, handleDrop, status, listItemsSorted, newListItemInputHandler } = props;

	return (
		<div className={classes.columnStatus}>
			<h3 className={classes.statusHeading}>{status}</h3>
			<div className={classes.list} data-testid="items">
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
					<input ref={newListItem} placeholder="Add new task here" type="text" />
					<button onClick={() => newListItemInputHandler(newListItem, status)}>Add</button>
				</div>
			</div>
		</div>
	);
}

export default Items;
