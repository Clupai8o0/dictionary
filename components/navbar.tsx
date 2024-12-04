"use client"

import React from "react";
import { Separator } from "./ui/separator";
import ModeToggle from "./mode-toggle";
import FontMenu from "./font-menu";

const Navbar = () => {
	return (
		<nav className="w-full flex justify-between items-center py-6 px-4">
			<img src="/images/logo.svg" alt="dictionary logo" />

			<div className="flex items-center gap-0">
				<FontMenu />
				<Separator orientation="vertical" className="h-8 mr-3" />
				<ModeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
