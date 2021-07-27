import "./App.css";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HeroNav from "./components/HeroNav/HeroNav";
import HomeSection from "./components/HomeSection/HomeSection";
import AccountAccess from "./components/AccountAccess/AccountAccess";
import ContactSection from "./components/ContactSection/ContactSection";
import AboutSection from "./components/AboutSection/AboutSection";
import LeagueSection from "./components/LeagueSection/LeagueSection";
import FooterSection from "./components/FooterSection/FooterSection";
function App() {
	const navOptions = ["Home", "About", "League", "Contact", "Accounts"];
	const [loggedIn, setLoggedIn] = useState(false);
	const defaultUser = { username: "guest" };
	const [activeUser, setActiveUser] = useState(defaultUser);
	return (
		<div className="App">
			{/* Default nav that is always present */}
			<HeroNav navOptions={navOptions} />
			{/* Begin individual page routing */}
			<Switch>
				<Route exact={true} path="/">
					<Redirect to={"/home"} />
				</Route>
				<Route path="/about" exact>
					<AboutSection />
				</Route>
				<Route path="/accounts" exact>
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
					<LeagueSection />
				</Route>
			</Switch>
			<FooterSection />
		</div>
	);
}

export default App;
