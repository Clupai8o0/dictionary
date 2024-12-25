import { DictionaryWord, useWordState } from "@/lib/state";
import { Separator } from "./ui/separator";
import { v4 as generateKey } from "uuid";
import Link from "next/link";

function isDictionaryWord(word: any): word is DictionaryWord {
	return (
		"word" in word &&
		"phonetic" in word &&
		"audio" in word &&
		"meanings" in word &&
		"source" in word
	);
}

const App = () => {
	const word = useWordState((state) => state.word) || {};
	
	const playPhoneticAudio = () => {
		if (isDictionaryWord(word)) {
			let audio = new Audio(word.audio);
			audio.play();
		}
	}

	return isDictionaryWord(word) ? (
		<main>
			<header className="flex justify-between item-center py-6">
				<div className="flex flex-col items-start justify-center gap-1">
					<h1 className="heading-l">{word.word}</h1>
					<span className="text-primary body-m">{word.phonetic}</span>
				</div>
				<div className="flex items-center cursor-pointer" onClick={playPhoneticAudio}>
					<img
						src="/images/icon-play.svg"
						alt="play"
						className="h-12 md:h-20 w-12 md:w-20"
					/>
				</div>
			</header>

			{word.meanings.map((meaning) => (
				<section className="mb-6" key={generateKey()}>
					<header className="flex gap-4 items-center">
						<h2 className="body-m italic font-bold">{meaning.partOfSpeech}</h2>
						<div className="w-full">
							<Separator />
						</div>
					</header>

					<article className="mt-4">
						<h1 className="text-base text-[#757575]">Meaning</h1>
						<ul className="text-[15px] my-2 ml-6 list-disc [&>li]:mt-2 marker:text-primary">
							{meaning.definitions.map((definition) => (
								<li key={generateKey()}>
									<div className="flex flex-col gap-3">
										<p>{definition.definition}</p>
										{definition.example && (
											<q className="text-[#757575]">{definition.example}</q>
										)}
									</div>
								</li>
							))}
						</ul>
						{meaning.synonyms && (
							<div className="flex gap-6">
								<h1 className="text-base text-[#757575]">Synonyms</h1>
								<ul className="text-base font-bold">
									{meaning.synonyms.map((synonym) => (
										<li
											key={generateKey()}
											className="text-primary hover:underline"
										>
											{synonym}
										</li>
									))}
								</ul>
							</div>
						)}
						{meaning.antonyms && (
							<div className="flex gap-6">
								<h1 className="text-base text-[#757575]">Antonyms</h1>
								<ul className="text-base font-bold">
									{meaning.antonyms.map((antonym) => (
										<li
											key={generateKey()}
											className="text-primary hover:underline"
										>
											{antonym}
										</li>
									))}
								</ul>
							</div>
						)}
					</article>
				</section>
			))}

			<Separator />

			<section className="mt-6 mb-8 flex gap-4">
				<h1 className="body-s underline text-[#757575]">Source</h1>

				<Link href={word.source} target="_blank">
					<div className="flex items-center gap-2 body-s underline">
						<span>{word.source}</span>
						<span>
							<img src="/images/icon-new-window.svg" alt="new window" />
						</span>
					</div>
				</Link>
			</section>
		</main>
	) : null;
};

export default App;
