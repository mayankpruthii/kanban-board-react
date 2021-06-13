import React, { useState, useEffect, useRef } from "react";
import Items from "./components/Items";
import "./App.css";

function App() {
	// list is the actual list of all items that are stored in here
	// see useEffect for its initialState
	let [list, listHandler] = useState([]);

	// listStatus is the category of the list i.e done, pending etc
	let [listStatus, listStatusHandler] = useState([]);

  let statusInput = useRef(null);

	useEffect(() => {
		const _list = [
			{
				name: "html",
				status: "Done",
			},
			{
				name: "javascript",
				status: "Done",
			},
			{
				name: "react",
				status: "Pending",
			},
			{
				name: "node",
				status: "Pending",
			},
		];
		listHandler(_list);
		listStatusHandler(["Done", "Pending"]);
	}, []);

	// check for small screens
	if (window.innerWidth < 500) {
		return (
			<div className="App">
				<p>This application is not supported on devices having width smaller than 500pixels.</p>
			</div>
		);
	}

	// add new list item in already existing status field
	const newListItemInputHandler = (item, itemStatus) => {
    let name = item.current.value;
    item.current.value = null;
    listHandler([...list, { name, status: itemStatus }]);
	};

	// add new status list
	const newStatusListInputHandler = (name) => {
    statusInput.current.value = null;
		listStatusHandler([...listStatus, name]);
	};

	// event handlers
	const handleDragStart = (e, itemName) => {
		e.dataTransfer.setData("id", itemName);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e, status) => {
		let id = e.dataTransfer.getData("id");
		console.log(list);
		let _list = list.filter((item) => {
			if (item.name === id) {
				item.status = status;
			}
			return item;
		});
		listHandler(_list);
	};

	// make an object sorted wrt status
	// {done: [], pending: []}
	let listItemsSorted = {};
	listStatus.forEach((status) => {
		listItemsSorted[status] = [];
	});

	list.forEach((item, _index) => {
		listItemsSorted[item.status].push(
			<div key={_index} className="itemCard" onDragStart={(e) => handleDragStart(e, item.name)} draggable>
				{item.name}
			</div>,
		);
	});

	return (
		<div class="container">
			<div class="itemCategory">
				{listStatus.map((key) => {
					return (
						<Items
							newListItemInputHandler={newListItemInputHandler}
							handleDragOver={handleDragOver}
							handleDrop={handleDrop}
							status={key}
							listItemsSorted={listItemsSorted[key]}
						/>
					);
				})}
				<div className="addNewCategory">
					<input ref={statusInput} placeholder="Add new category" className="categoryInput" />
					<button onClick={() => newStatusListInputHandler(statusInput.current.value)} className="addCategoryButton">
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
