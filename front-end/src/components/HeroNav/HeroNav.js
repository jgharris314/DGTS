import { StyledHeroNav } from "./hero-nav.styles";
import React from "react";
import { Link } from "react-router-dom";
export default function HeroNav({ navOptions, activeUser }) {
	return (
		<StyledHeroNav>
			<div className="hero-header">
				<h1>Fascinating Title Here</h1>
			</div>
			<ul className="nav-list">
				{navOptions.map((e) => (
					<Link
						to={`/${e.toLowerCase()}`}
						key={e.toLowerCase()}
						className="nav-list-item"
					>
						{e}
					</Link>
				))}
			</ul>
			<div className="account-info">
				<div className="account-info-item">
					Name: {activeUser.username}
				</div>
				<div className="account-info-item">
					Account Type: {activeUser.account_type}
				</div>
				<div className="account-info-item">
					PDGA Number: {activeUser.pdga_number}
				</div>
			</div>
		</StyledHeroNav>
	);
}
