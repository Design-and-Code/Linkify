import React from "react";
import { useState } from "react";
import HeroSection from "../../components/HomePage/herosection/herosection";
import "./HomePageGlobals.css";

export default function App() {
	const [colorMode, setcolorMode] = useState(false);

	return (
		<div
			style={
				colorMode
					? { backgroundColor: "#000" }
					: { backgroundColor: "#fff" }
			}
		>
			<HeroSection colorMode={colorMode} />
		</div>
	);
}
