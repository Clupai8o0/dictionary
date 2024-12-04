"use client"

import React, { useEffect } from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

const ModeToggle = () => {
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		if (theme === "system") setTheme("light");
	}, [theme]);

	return (
		<div className="flex items-center gap-3">
			<Switch
				checked={theme === "dark"}
				onCheckedChange={(checked) => {
					if (checked) setTheme("dark");
					else setTheme("light");
				}}
			/>
			<img src="/images/icon-moon.svg" alt="dark mode logo" />
		</div>
	);
};

export default ModeToggle;
