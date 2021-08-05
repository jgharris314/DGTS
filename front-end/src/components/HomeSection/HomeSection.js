import React from "react";
import { StyledHomeSection } from "./home-section.styles";

export default function HomeSection() {
	return (
		<StyledHomeSection>
			<img src="https://via.placeholder.com/250" alt="placeholder img" />
			<div className="home-txt">
				Hello and welcome to the most wonderful disc golf tag system on
				the face of the internet
			</div>
		</StyledHomeSection>
	);
}
