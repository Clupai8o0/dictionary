"use client";

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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 22 22"
			>
				<path
					fill="none"
					stroke={theme === "dark" ? "#A445ED" : "#838383"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
				/>
			</svg>
		</div>
	);
};

export default ModeToggle;
