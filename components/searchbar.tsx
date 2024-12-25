"use client";

import clsx from "clsx";
import { Search } from "./ui/input";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
	DictionaryWord,
	useSearchNotFoundState,
	useWordState,
} from "@/lib/state";

const SearchBar = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [search, setSearch] = useState("");
	const [error, setError] = useState("");

	const setWordState = useWordState((state) => state.setWord);
	const setSearchNotFound = useSearchNotFoundState(
		(state) => state.setNotFound
	);

	useEffect(() => {
		// on load, loading if there is a search query
		const query = searchParams.get("q");
		setSearch(query || "");
		searchWord(query || "");
	}, []);

	const searchWord = async (word: string) => {
		try {
			setSearchNotFound(false);
			const resp = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
			);
			const data = await resp.json();

			if (resp.status === 404) throw new Error("Word not found");
			else {
				const word: DictionaryWord = {
					word: data[0].word,
					phonetic: data[0].phonetic,
					audio:
						data[0].phonetics.filter((phonetic: any) => {
							//* return only the phonetic with audio
							return phonetic.audio;
						})[0].audio || "",
					meanings: data[0].meanings.map((meaning: any) => ({
						partOfSpeech: meaning.partOfSpeech,
						definitions: meaning.definitions.map((definition: any) => ({
							definition: definition.definition,
							example: definition.example || null,
						})),
						synonyms:
							(meaning.synonyms.length !== 0 && meaning.synonyms) || null,
						antonyms:
							(meaning.antonyms.length !== 0 && meaning.antonyms) || null,
					})),
					source: data[0].sourceUrls[0],
				};
				console.log(word);
				setWordState(word);
			}
		} catch (e) {
			//@ts-ignore
			setWordState(null);
			setSearchNotFound(true);
		}
	};

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (search === "") {
			setError("Whoops, can't be empty");
		} else {
			setError("");

			// setting the query link
			const params = new URLSearchParams(searchParams.toString());
			params.set("q", search);
			router.push("?" + params.toString());

			// updating dictionary state
			await searchWord(search);
		}
	};

	return (
		
			<form className="flex flex-col gap-2" onSubmit={handleSearch}>
				<Search
					type="text"
					placeholder="Search for any word..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={clsx()}
				/>
				<label htmlFor="error" className="text-destructive body-s">
					{error}
				</label>
			</form>
		
	);
};

export default SearchBar;
