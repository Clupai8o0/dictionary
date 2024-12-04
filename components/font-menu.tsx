import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const FontMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost">
					<span>Sans Serif</span>
					<span>
						<img src="images/icon-arrow-down.svg" alt="Down arrow" />
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => {}}>Light</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default FontMenu;
