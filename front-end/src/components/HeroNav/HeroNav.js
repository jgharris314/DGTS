import { StyledHeroNav } from "./hero-nav.styles";
import React from "react";
import { Link } from "react-router-dom";
export default function HeroNav({ navOptions, activeUser }) {
	return (
		<StyledHeroNav>
			<div className="hero-header">
				<h1>Karp's Tagpalooza</h1>
			</div>
			<ul className="nav-list">
				{navOptions.map((e) => (
					<Link to={`/${e.toLowerCase()}`} className="nav-list-item">
						{e}
					</Link>
				))}
			</ul>
			<p>
				Welcome {activeUser.username} Account Type:{" "}
				{activeUser.account_type} PDGA Number: {activeUser.pdga_number}{" "}
			</p>
		</StyledHeroNav>
	);
}
