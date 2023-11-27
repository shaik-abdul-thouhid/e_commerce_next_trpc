"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Fragment, useEffect, useRef, useState } from "react";
import { NavItem } from "./navItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const isAnyOpen = activeIndex !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => setActiveIndex(null));

	useEffect(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActiveIndex(null);
			}
		};

		document.addEventListener("keydown", handler);

		return () => document.removeEventListener("keydown", handler);
	}, []);

	return (
		<Fragment>
			<div className="flex gap-4 h-full" ref={navRef}>
				{
					PRODUCT_CATEGORIES.map((category, index) => {
						const handleOpen = () => {
							if (activeIndex === index) {
								setActiveIndex(null);
							} else {
								setActiveIndex(index);
							}
						};

						const isOpen = index === activeIndex;

						return (
							<NavItem key={category.value} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} />
						);
					})
				}
			</div>
		</Fragment>
	);
};