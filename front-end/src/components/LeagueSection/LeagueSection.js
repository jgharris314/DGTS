import React from "react";
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
			return <p>Please Sign in to use this feature</p>;
		}
	};

	return <StyledLeagueSection>{renderLeagueSection()}</StyledLeagueSection>;
}
