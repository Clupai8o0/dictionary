import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const App = () => {
	return (
		<main>
			<header className="flex justify-between item-center py-4">
				<div className="flex flex-col items-start justify-center gap-1">
					<h1 className="heading-l">keyboard</h1>
					<span className="text-primary body-m">/ˈkiːbɔːd/</span>
				</div>
				<div className="flex items-center">
					<img src="/images/icon-play.svg" alt="play" className="h-12 w-12" />
					<audio
						src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"
						hidden
					></audio>
				</div>
			</header>

			<section>
				<header className="flex gap-4 items-center">
					<h2 className="body-m italic font-bold">noun</h2>
					<div className="w-full">
						<Separator />
					</div>
				</header>
				
			</section>
		</main>
	);
};

export default App;
