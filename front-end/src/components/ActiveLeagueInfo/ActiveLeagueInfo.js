import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { StyledActiveLeagueInfo } from "./active-league-info.styles";
import { listLeagueByLeagueId } from "../../utilities/api";

export default function ActiveLeagueInfo() {
	const { league_id } = useParams();
	const [activeLeague, setActiveLeague] = useState({});
	useEffect(() => {
		const abortController = new AbortController();
		listLeagueByLeagueId(league_id, abortController.signal).then(
			setActiveLeague
		);
		return () => abortController.abort;
	}, [league_id]);

	return (
		<StyledActiveLeagueInfo>
			Name: {activeLeague.league_name}
			Location: {activeLeague.location}
			{/* add member will be loaded with queries? lookup member based on email, add user_id to league member_list. maybe? */}
			<button>Add member</button>
		</StyledActiveLeagueInfo>
	);
}
