import React from "react";
import { Link } from "react-router-dom";
import { StyledLeagueSection } from "./league-section.styles";
import ManagerLeague from "./components/ManagerLeague/ManagerLeague";
import PlayerLeague from "./components/PlayerLeague/PlayerLeague";

export default function LeagueSection({ activeUser, ownedLeagues }) {
	const renderLeagueSection = () => {
		if (activeUser.account_type.toLowerCase() === "manager") {
			return (
				<ManagerLeague
					activeUser={activeUser}
					ownedLeagues={ownedLeagues}
				/>
			);
		} else if (activeUser.account_type.toLowerCase() === "player") {
			return <PlayerLeague activeUser={activeUser} />;
		} else {
			return (
				<p>
					Please Sign in to Access Leagues
					<Link to={`/account`} className="account-button">
						Do the thing!
					</Link>
				</p>
			);
		}
	};

	return <StyledLeagueSection>{renderLeagueSection()}</StyledLeagueSection>;
}
