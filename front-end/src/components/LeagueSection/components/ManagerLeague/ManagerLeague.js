import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledManagerLeague } from "./manager-league.styles";
import { createNewLeague, listLeagueById } from "../../../../utilities/api";
import { useHistory } from "react-router-dom";

export default function ManagerLeague({ activeUser, ownedLeagues }) {
	const [render, setRender] = useState(false);

	const history = useHistory();
	const [createLeague, setCreateLeague] = useState(false);
	const [formData, setFormData] = useState({});

	const handleCreateLeagueMode = () => {
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
		createNewLeague(shaped, abortController.signal);
		setFormData({});
		setCreateLeague(false);
		setRender(!render);
		return () => abortController.abort;
	};

	const handleCancel = () => {
		setFormData({});
		setCreateLeague(false);
	};
	return (
		<StyledManagerLeague>
			<h2>Welcome to your leagues page {activeUser.first_name}</h2>
			{ownedLeagues.length === 0 ? (
				<div>You do not own any leagues</div>
			) : (
				<div className="owned-leagues">
					These are the current leagues that you run
					{ownedLeagues.map((league) => (
						<div
							className="owned-leagues-individual"
							key={league.league_id}
						>
							<div>{league.league_name}</div>
							<div>Max capacity: {league.number_of_members}</div>
							<div>
								Current member count:{" "}
								{league.member_list
									? league.member_list.length
									: 0}
							</div>
							<Link to={`/leagues/info/${league.league_id}`}>
								View
							</Link>
						</div>
					))}
				</div>
			)}
			<button onClick={() => handleCreateLeagueMode()}>
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
					></input>
					<label htmlFor="number_of_members">Number of Members</label>
					<input
						name="number_of_members"
						id="number_of_members"
						type="number"
						onChange={handleChange}
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
