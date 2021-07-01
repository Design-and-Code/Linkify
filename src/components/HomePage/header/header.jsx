import "./style.css";

const header = ({ colorMode }) => {
	return (
		<div id="header" className="top-1">
			<h1 id="logo" style={{ color: colorMode ? "#fff" : "#000" }}>
				Linkyfy
			</h1>
			<div id="linkContainer">
				<a
					href="/account"
					className="btnHeader"
					style={{ color: colorMode ? "#fff" : "#000" }}
				>
					Login
				</a>
				<a
					href="/account"
					className="btnHeader"
					style={{
						backgroundColor: "#4643c3",
					}}
				>
					Sign up
				</a>
			</div>
		</div>
	);
};

export default header;
