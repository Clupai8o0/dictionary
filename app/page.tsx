"use client";

import clsx from "clsx";

import { useFontState, useSearchNotFoundState } from "@/lib/state";

import App from "@/components/app";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import { Suspense } from "react";

function Home() {
	const font = useFontState((state) => state.font);
	const searchNotFound = useSearchNotFoundState((state) => state.notFound);

	return (
		<div className={clsx("px-6 md:px-8 max-w-3xl mx-auto", font)}>
			<Navbar />
			<Suspense>
				<SearchBar />
			</Suspense>
			<App />
			{searchNotFound && (
				<main className="flex flex-col items-center justify-center gap-4 mt-8 text-center pt-12">
					<h1 className="text-6xl">☹️</h1>
					<h2 className="heading-s font-bold mt-6">No Definitions Found</h2>
					<p className="body-m opacity-60">
						Sorry pal, we couldn't find definitions for the word you were
						looking for. You can try the search again at later time or head to
						the web instead.
					</p>
				</main>
			)}
		</div>
	);
}

export default Home;
