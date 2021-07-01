import React from "react";
import { useState, useEffect } from "react";
import HeroSection from "../../components/HomePage/herosection/herosection";
import Header from "../../components/HomePage/header/header";
import "./HomePageGlobals.css";

export default function App() {
	const [colorMode, setcolorMode] = useState(true);

	useEffect(() => {
		document.documentElement.style.setProperty("--transition-onload", "0.8s");
	}, []);
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--colorMode",
			colorMode ? "#000" : "#fff"
		);
	}, [colorMode]);

	return (
		<div
			style={{
				backgroundColor: colorMode ? "#000" : "#fff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Header colorMode={colorMode} />
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
