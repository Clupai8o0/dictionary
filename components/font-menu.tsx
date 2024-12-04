import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useFontState } from "@/lib/state";
import { useEffect, useState } from "react";

const FontMenu = () => {
	const font = useFontState((state) => state.font);
	const setFont = useFontState((state) => state.setFont);

	const [fontName, setFontName] = useState("");

	useEffect(() => {
		switch (font) {
			case "sans-serif":
				setFontName("Sans Serif");
				break;
			case "serif":
				setFontName("Serif");
				break;
			case "monospace":
				setFontName("Mono");
				break;
		}
	}, [font]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="md:space-x-2">
					<span className="font-bold text-sm md:text-lg">{fontName}</span>
					<span>
						<img src="images/icon-arrow-down.svg" alt="Down arrow" />
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="text-sm md:text-lg">
				<DropdownMenuItem
					onClick={() => setFont("sans-serif")}
					className="sans-serif"
				>
					Sans Serif
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setFont("serif")} className="serif">
					Serif
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setFont("monospace")}
					className="monospace"
				>
					Mono
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default FontMenu;
