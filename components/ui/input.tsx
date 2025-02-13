import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

const Search = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
	return (
		<div className="flex w-full rounded-xl border-none bg-[#f4f4f4] dark:bg-[#1f1f1f] px-4 py-2 text-base transition-colors">
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border-none bg-transparent mr-2 px-3 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder-opacity-25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-bold",
					className
				)}
				ref={ref}
				{...props}
			/>
			<img src="/images/icon-search.svg" alt="search icon" />
		</div>
	);
});
Search.displayName = "Search";

export { Input, Search };
