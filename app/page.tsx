"use client";

import clsx from "clsx";

import { useFontState } from "@/lib/state";

import App from "@/components/app";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";

function Home() {
	const font = useFontState((state) => state.font);

	return (
		<div className={clsx("px-6 md:px-8 max-w-3xl mx-auto", font)}>
			<Navbar />
			<SearchBar />
			<App />
		</div>
	);
}

export default Home;
