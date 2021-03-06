import "./App.css";
import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HeroNav from "./components/HeroNav/HeroNav";
import HomeSection from "./components/HomeSection/HomeSection";
import AccountAccess from "./components/AccountAccess/AccountAccess";
import ContactSection from "./components/ContactSection/ContactSection";
import AboutSection from "./components/AboutSection/AboutSection";
import LeagueSection from "./components/LeagueSection/LeagueSection";
import FooterSection from "./components/FooterSection/FooterSection";
import ActiveLeagueInfo from "./components/ActiveLeagueInfo/ActiveLeagueInfo";
import { listLeagueById } from "./utilities/api";
function App() {
	const navOptions = ["Home", "About", "Leagues", "Account"];
	const [ownedLeagues, setOwnedLeagues] = useState([]);
	const defaultUser = {
		username: "guest",
		pdga_number: Infinity,
		account_type: "guest",
	};
	const [activeUser, setActiveUser] = useState(defaultUser);
	useEffect(() => {
		const loggedInUser = localStorage.getItem("activeUser");
		const today = new Date(Date.now());
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			if (foundUser.cookie.expires > today.toISOString()) {
				return setActiveUser(foundUser);
			} else {
				setActiveUser(defaultUser);
				localStorage.setItem("activeUser", "");
			}
		}
	}, []);

	useEffect(() => {
		const abortController = new AbortController();
		listLeagueById(activeUser.user_id, abortController.signal)
			.then((res) => setOwnedLeagues(res))
			.catch((error) => error);
		return () => abortController.abort;
	}, [activeUser.user_id]);
	return (
		<div className="App">
			{/* Default nav that is always present */}
			<HeroNav
				navOptions={navOptions}
				activeUser={activeUser}
				setActiveUser={setActiveUser}
				defaultUser={defaultUser}
			/>
			{/* Begin individual page routing */}
			<Switch>
				<Route exact={true} path="/">
					<Redirect to={"/home"} />
				</Route>
				<Route path="/about" exact>
					<AboutSection />
				</Route>
				<Route path="/account" exact>
					<AccountAccess
						activeUser={activeUser}
						setActiveUser={setActiveUser}
					/>
				</Route>
				<Route path="/contact" exact>
					<ContactSection />
				</Route>
				<Route path="/home" exact>
					<HomeSection />
				</Route>
				<Route path="/leagues/info/:league_id" exact>
					<ActiveLeagueInfo
						activeUser={activeUser}
						ownedLeagues={ownedLeagues}
					/>
				</Route>
				<Route path="/leagues" exact>
					<LeagueSection
						activeUser={activeUser}
						setActiveUser={setActiveUser}
						ownedLeagues={ownedLeagues}
					/>
				</Route>
			</Switch>
			<FooterSection />
		</div>
	);
}

export default App;
