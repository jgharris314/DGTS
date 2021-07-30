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
function App() {
	const navOptions = ["Home", "About", "League", "Contact", "Account"];
	const [loggedIn, setLoggedIn] = useState(false);
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
						loggedIn={loggedIn}
						setLoggedIn={setLoggedIn}
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
				<Route path="/league" exact>
					<LeagueSection activeUser={activeUser} />
				</Route>
			</Switch>
			<FooterSection />
		</div>
	);
}

export default App;
