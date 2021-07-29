import React from "react";
import { Link } from "react-router-dom";
import { StyledLeagueSection } from "./league-section.styles";
import ManagerLeague from "./components/ManagerLeague/ManagerLeague";
import PlayerLeague from "./components/PlayerLeague/PlayerLeague";

export default function LeagueSection({ activeUser }) {
	const renderLeagueSection = () => {
		if (activeUser.account_type.toLowerCase() === "manager") {
			return <ManagerLeague />;
		} else if (activeUser.account_type.toLowerCase() === "player") {
			return <PlayerLeague />;
		} else {
			return (
				<p>
					Please Sign in to use this feature
					<br />
					<Link to={`/account`} className="account-button">
						Do the thing!
					</Link>
				</p>
			);
		}
	};

	return <StyledLeagueSection>{renderLeagueSection()}</StyledLeagueSection>;
}
