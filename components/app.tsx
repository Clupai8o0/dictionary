import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const App = () => {
	return (
		<main>
			<header className="flex justify-between item-center py-6">
				<div className="flex flex-col items-start justify-center gap-1">
					<h1 className="heading-l">keyboard</h1>
					<span className="text-primary body-m">/ˈkiːbɔːd/</span>
				</div>
				<div className="flex items-center">
					<img src="/images/icon-play.svg" alt="play" className="h-12 md:h-20 w-12 md:w-20" />
					<audio
						src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"
						hidden
					></audio>
				</div>
			</header>

			<section className="mb-6">
				<header className="flex gap-4 items-center">
					<h2 className="body-m italic font-bold">noun</h2>
					<div className="w-full">
						<Separator />
					</div>
				</header>

				<article className="mt-4">
					<h1 className="text-base text-[#757575]">Meaning</h1>
					<ul className="text-[15px] my-2 ml-6 list-disc [&>li]:mt-2 marker:text-primary">
						<li>
							(etc.) A set of keys used to operate a typewriter, computer etc.
						</li>
						<li>
							A component of many instruments including the piano, organ, and
							harpsichord consisting of usually black and white keys that cause
							different tones to be produced when struck.
						</li>
						<li>
							A device with keys of a musical keyboard, used to control
							electronic sound-producing devices which may be built into or
							separate from the keyboard device.
						</li>
					</ul>
					<div className="flex gap-6">
						<h1 className="text-base text-[#757575]">Synonyms</h1>
						<ul className="text-base font-bold">
							<li className="text-primary">electronic keyboard</li>
						</ul>
					</div>
				</article>
			</section>

			<section className="mb-6">
				<header className="flex gap-4 items-center">
					<h2 className="body-m italic font-bold">verb</h2>
					<div className="w-full">
						<Separator />
					</div>
				</header>

				<article className="mt-4">
					<h1 className="text-base text-[#757575]">Meaning</h1>
					<ul className="text-[15px] my-2 ml-6 list-disc [&>li]:mt-2 marker:text-primary">
						<li>
							<div className="flex flex-col gap-3">
								<p>To type on a computer keyboard.</p>
								<q className="text-[#757575]">
									Keyboarding is the part of this job I hate the most.
								</q>
							</div>
						</li>
					</ul>
				</article>
			</section>

			<Separator />

			<section className="mt-6 mb-8">
				<h1 className="body-s underline text-[#757575]">Source</h1>
				<ul>
					<li className="flex items-center gap-2 body-s underline">
						<span>https://en.wiktionary.org/wiki/keyboard</span>
						<span><img src="/images/icon-new-window.svg" alt="new window" /></span>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default App;
