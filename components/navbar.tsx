"use client"

import React from "react";
import { Separator } from "./ui/separator";
import ModeToggle from "./mode-toggle";
import FontMenu from "./font-menu";

const Navbar = () => {
	return (
		<nav className="w-full flex justify-between items-center py-6 md:py-9">
			<img src="/images/logo.svg" alt="dictionary logo" />

			<div className="flex items-center gap-0 md:gap-2">
				<FontMenu />
				<Separator orientation="vertical" className="h-10 mr-3 md:mr-4" />
				<ModeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
