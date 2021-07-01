import { useMediaQuery } from "react-responsive";

import "../herosection/style.css";
import placeHolder from "../../assets/placeholder1665.png";
import bgCircleLM from "../../assets/bgCircleLM.svg";
import bgCircleDM from "../../assets/bgCircleDM.svg";

const Herosection = ({ colorMode }) => {
	const isMobile = useMediaQuery({ query: `(max-width: 870px)` });

	return (
		<div id="heroSection">
			{!isMobile && (
				<>
					<img
						id="rightBgCircle"
						src={colorMode ? bgCircleLM : bgCircleDM}
						alt="Circle"
					/>
					<img
						id="leftBgCircle"
						src={colorMode ? bgCircleLM : bgCircleDM}
						alt="Circle"
					/>
				</>
			)}

			<div id="heroContent" style={{ color: colorMode ? "#fff" : "#000" }}>
				<h1 className="top-1">All your links in one place</h1>
				<p className="top-1">
					The only link you'll ever need to connect with everyone in the world.
				</p>
				<a href="/account" className="top-1">
					Get Started
				</a>
				<div className="top-1 cardDesign" style={{ marginTop: "4rem" }}>
					<img src={placeHolder} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Herosection;
