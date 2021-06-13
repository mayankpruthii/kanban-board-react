import React from "react";
import Items from "../Items";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

it("renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Items status="Done" listItemsSorted={[<div>Task1</div>]} />, div)
})

it("renders correctly", () => {
	const { getByTestId } = render(<Items status="Done" listItemsSorted={[<div>Task1</div>]} />);
    expect(getByTestId("items")).toHaveTextContent("Task1")
});