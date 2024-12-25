import { create } from "zustand";

interface FontState {
	font: string;
	setFont: (font: string) => void;
}

export const useFontState = create<FontState>()((set) => ({
	font: "sans-serif",
	setFont: (font) => set({ font }),
}));

export interface DictionaryWord {
	word: string;
	phonetic: string;
	audio: string;
	meanings: {
		partOfSpeech: string;
		definitions: {
			definition: string;
			example: string | null;
		}[];
		synonyms: string[] | null;
		antonyms: string[] | null;
	}[];
	source: string;
}

interface WordState {
	word: DictionaryWord | {} | null;
	setWord: (word: DictionaryWord) => void;
}

export const useWordState = create<WordState>((set) => ({
	word: {},
	setWord: (word) => set({ word }),
}));

interface SearchNotFoundState {
	notFound: boolean;
	setNotFound: (notFound: boolean) => void;
}

export const useSearchNotFoundState = create<SearchNotFoundState>((set) => ({
	notFound: false,
	setNotFound: (notFound) => set({ notFound }),
}));
