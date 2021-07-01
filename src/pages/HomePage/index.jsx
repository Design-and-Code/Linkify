import React from "react";
import { useState, useEffect } from "react";
import HeroSection from "../../components/HomePage/herosection/herosection";
import "./HomePageGlobals.css";

export default function App() {
	const [colorMode, setcolorMode] = useState(true);

	useEffect(() => {
		document.documentElement.style.setProperty("--transition-onload", "0.8s");
	}, []);

	return (
		<div
			style={
				colorMode ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }
			}
		>
			<HeroSection colorMode={colorMode} />

			{/* Please remove this button with something better. -> Switch in navbar? */}
			<button
				onClick={() => setcolorMode(!colorMode)}
				style={{ color: "white" }}
			>
				Toggle ColorMode
			</button>
		</div>
	);
}
