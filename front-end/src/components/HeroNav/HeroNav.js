import { StyledHeroNav } from "./hero-nav.styles";
import React from "react";
import { Link } from "react-router-dom";
export default function HeroNav({ navOptions }) {
	return (
		<StyledHeroNav>
			<h1 className="hero-header">DISC GOLF TAG SYSTEM</h1>
			<ul className="nav-list">
				{navOptions.map((e) => (
					<Link to={`/${e.toLowerCase()}`} className="nav-list-item">
						{e}
					</Link>
				))}
			</ul>
		</StyledHeroNav>
	);
}
