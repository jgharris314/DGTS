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
	const [render, setRender] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const abortController = new AbortController();
		listLeagueByLeagueId(league_id, abortController.signal).then(
			setActiveLeague
		);
		return () => abortController.abort;
	}, [league_id, render]);

	const addMember = async (event) => {
		const { username } = formData;

		event.preventDefault();
		const user_id = await getMemberInfo(username).catch((error) => error);

		const preppedData = {
			user_id: user_id.user_id,
			league_id: activeLeague.league_id,
		};

		if (user_id.message) {
			setError(`Username ${username} does not exist.`);
			return null;
		} else if (user_id.user_id) {
			if (activeLeague.member_list.includes(user_id.user_id)) {
				setError(`${username} is already in this league`);
				return null;
			} else {
				await addMemberToLeague(preppedData);
				return setRender(!render);
			}
		} else {
			setError("Please provide a valid username!");
		}
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
			5. Last Event Played (i am posponing this)
			6. Days until rank decays (i am posponing this)
			7. Global Rank (i have a col but idk how to actually use this)
			8. Global Rank change (num with green or red arrow)
			*/}
			{/* add member will be loaded with queries? lookup member based on email, add user_id to league member_list. maybe? */}
			<form onSubmit={(event) => addMember(event)}>
				{error.length ? <div className="error-msg">{error}</div> : null}
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
			<div>Name: {activeLeague.league_name}</div>
			<div>Location: {activeLeague.location}</div>
			Members:{" "}
			{activeLeague.member_list
				? activeLeague.member_list.map((member) => (
						<div key={member}>{member}</div>
				  ))
				: null}
		</StyledActiveLeagueInfo>
	);
}
