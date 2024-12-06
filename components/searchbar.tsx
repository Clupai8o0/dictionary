import React from "react";
import { Search } from "./ui/input";

const SearchBar = () => {
	return (
		<form>
			<Search type="text" placeholder="Search for any word..." />
		</form>
	);
};

export default SearchBar;
