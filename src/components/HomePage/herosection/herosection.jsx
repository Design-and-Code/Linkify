import "../herosection/style.css";
import placeHolder from "../../assets/placeholder1665.png";
import bgCircleLM from "../../assets/bgCircleLM.svg";
import bgCircleDM from "../../assets/bgCircleDM.svg";

const herosection = ({ colorMode }) => {
	return (
		<div id="heroSection">
			<img
				id="rightBgCircle"
				src={colorMode ? bgCircleLM : bgCircleDM}
				alt=""
			/>
			<img id="leftBgCircle" src={colorMode ? bgCircleLM : bgCircleDM} alt="" />
			<div
				id="heroContent"
				style={colorMode ? { color: "#fff" } : { color: "#000" }}
			>
				<h1 className="top-1">All your links in one place</h1>
				<p className="top-1">
					The only link you'll ever need to connect with everyone in the world.
				</p>
				<a href="/account" className="top-1">
					Get Started
				</a>
				<div className="top-1 cardDesign ">
					<img src={placeHolder} alt="" />
				</div>
			</div>
		</div>
	);
};

export default herosection;
