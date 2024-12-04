"use client";

import { useRecoilValue, RecoilRoot } from "recoil";
import { fontState } from "@/lib/state";

import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import clsx from "clsx";

function Home() {
	const font = useRecoilValue(fontState);

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
