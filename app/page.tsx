"use client";

import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import { useFontState } from "@/lib/state";
import clsx from "clsx";

function Home() {
	const font = useFontState((state) => state.font);

	return (
		<div className={clsx("px-6 md:px-8 max-w-3xl mx-auto", font)}>
			<Navbar />
			<main>
				<SearchBar />
			</main>
		</div>
	);
}

export default Home;
