import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { StyledActiveLeagueInfo } from "./active-league-info.styles";
import {
	listLeagueByLeagueId,
	addMemberToLeague,
	getMemberInfo,
} from "../../utilities/api";

export default function ActiveLeagueInfo() {
	const { league_id } = useParams();
	const [activeLeague, setActiveLeague] = useState({});
	const [formData, setFormData] = useState({ username: "" });

	useEffect(() => {
		const abortController = new AbortController();
		listLeagueByLeagueId(league_id, abortController.signal).then(
			setActiveLeague
		);
		return () => abortController.abort;
	}, [league_id]);

	const addMember = async (event) => {
		event.preventDefault();
		const user_id = await getMemberInfo(formData.username);
		console.log(user_id);
		console.log(activeLeague);
		const preppedData = {
			user_id: user_id.user_id,
			league_id: activeLeague.league_id,
		};

		return await addMemberToLeague(preppedData).then(
			setFormData({ username: "" })
		);
	};

	const handleChange = ({ target }) => {
		const value = target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};

	return (
		<StyledActiveLeagueInfo>
			{/* Ability to select between leagues owned and display the selected one */}
			<select>
				<option>Something</option>
			</select>
			{/* Desired Columns for member list 
			0.Ranked Based Emoji 
			1. Rank within League
			2. First Name
			3. Last Name
			4. Recent Rank Change (num with green or red arrow)
			5. Last Event Played
			6. Days until rank decays
			7. Global Rank
			8. Global Rank change (num with green or red arrow)
			*/}
			Name: {activeLeague.league_name}
			Location: {activeLeague.location}
			{/* add member will be loaded with queries? lookup member based on email, add user_id to league member_list. maybe? */}
			<form onSubmit={(event) => addMember(event)}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					name="username"
					id="username"
					onChange={handleChange}
					value={formData.username}
				/>
				<button type="submit">Add member</button>
			</form>
		</StyledActiveLeagueInfo>
	);
}
