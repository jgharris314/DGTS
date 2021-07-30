import React, { useState } from "react";
import { StyledManagerLeague } from "./manager-league.styles";
import { createNewLeague } from "../../../../utilities/api";
import { useHistory } from "react-router-dom";

export default function ManagerLeague({ activeUser }) {
	const [ownedLeagues, setOwnedLeagues] = useState([]);
	const history = useHistory();
	const [createLeague, setCreateLeague] = useState(false);
	const [formData, setFormData] = useState({});
	const handleClick = () => {
		setCreateLeague(!createLeague);
	};

	const handleChange = ({ target }) => {
		const value = isNaN(target.value) ? target.value : Number(target.value);
		setFormData({
			...formData,
			[target.name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const abortController = new AbortController();
		const shaped = { ...formData, owner_id: Number(activeUser.user_id) };
		createNewLeague(shaped, abortController.signal).then(history.go(0));
		return () => abortController.abort;
	};

	const handleCancel = () => {
		setFormData({});
		setCreateLeague(false);
	};
	return (
		<StyledManagerLeague>
			<h2>Welcome to your leagues page {activeUser.username}</h2>
			{ownedLeagues.length === 0 ? (
				<div>You do not own any leagues</div>
			) : (
				<div>Interesting league stuff</div>
			)}
			<button onClick={() => handleClick()}>
				{createLeague ? (
					<div>Close menu</div>
				) : (
					<div>Start a league!</div>
				)}
			</button>
			{createLeague ? (
				<form onSubmit={(event) => handleSubmit(event)}>
					<label htmlFor="league_name">League Name</label>
					<input
						type="text"
						name="league_name"
						id="league_name"
						onChange={handleChange}
						// value={formData["league_name"]}
					></input>
					<label htmlFor="number_of_members">Number of Members</label>
					<input
						name="number_of_members"
						id="number_of_members"
						type="number"
						onChange={handleChange}
						// value={formData["number_of_members"]}
					></input>
					<label htmlFor="location">Location</label>
					<input
						name="location"
						id="location"
						type="text"
						onChange={handleChange}
						// value={formData["location"]}
					></input>
					<button type="submit">Create League</button>
					<button onClick={() => handleCancel()}>Cancel</button>
				</form>
			) : null}
		</StyledManagerLeague>
	);
}
