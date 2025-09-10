import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, getSelected] = useState("red");

	return (
		<div className="text-center traffic_light">
			<div className={
				`light stop ${selected === "stop" ? "glow" : ""}`}
				onClick={() => getSelected("stop")}
			></div>
			<div className={
				`light caution ${selected === "caution" ? "glow" : ""}`
			} onClick={() => getSelected("caution")}></div>
			<div className={
				`light continue ${selected === "continue" ? "glow" : ""}`
			} onClick={() => getSelected("continue")}></div>

		</div>
	);
};

export default Home;