import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	let [list, listHandler] = useState([]);

	useEffect(() => {
		let _list = [
			{
				name: "html",
				status: "done",
			},
			{
				name: "javascript",
				status: "done",
			},
			{
				name: "react",
				status: "pending",
			},
			{
				name: "node",
				status: "pending",
			},
		];
		listHandler(_list);
		console.log(list);
	}, []);

	const handleDragStart = (e, itemName) => {
		// e.preventDefault();
    e.dataTransfer.setData("id", itemName) 
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e, status) => {
		// e.preventDefault();
    let id = e.dataTransfer.getData("id");
    console.log(list);
    let _list = list.filter((item) => {
      if(item.name === id) {
        item.status = status
      }
      return item;
    })
    listHandler(_list)
	};

	let listItems = {
		done: [],
		pending: [],
	};

	list.forEach((item, _index) => {
		listItems[item.status].push(
			<div key={_index} onDragStart={(e) => handleDragStart(e, item.name)} draggable>
				{item.name}
			</div>,
		);
	});

	return (
		<div className="App">
			<div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "pending")}>
				<h1>Pending</h1>
				{listItems.pending}
			</div>
			<div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "done")}>
				<h1>Done</h1>
				{listItems.done}
			</div>
		</div>
	);
}

export default App;
