"use client";

import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import { useFontState } from "@/lib/state";
import clsx from "clsx";

function Home() {
	const font = useFontState((state) => state.font);

	return (
		<div className={clsx("px-6", font)}>
			<Navbar />
			<main>
				<SearchBar />
			</main>
		</div>
	);
}

export default Home;
