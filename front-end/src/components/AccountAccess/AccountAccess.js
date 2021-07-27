import React, { useState } from "react";
import { StyledAccountAccess } from "./account-access.styles";
import AccountCreationForm from "./components/AccountCreationForm/AccountCreationForm";
import LoginForm from "./components/LoginForm/LoginForm";

export default function AccountAccess({
	loggedIn,
	setLoggedIn,
	activeUser,
	setActiveUser,
}) {
	const [isCreateAccount, setIsCreateAccount] = useState(false);

	const handleChange = (e) => {
		e.target.value === "create"
			? setIsCreateAccount(true)
			: setIsCreateAccount(false);
	};
	return (
		<StyledAccountAccess>
			<h3>Did you just nice me?</h3>
			<form className="radio-form">
				<input
					id="login"
					type="radio"
					value="login"
					name="isCreateAccount"
					onChange={(e) => handleChange(e)}
					defaultChecked
				/>
				<label className="radio-form-label" htmlFor="login">
					Sign In
				</label>

				<input
					id="create"
					type="radio"
					value="create"
					onChange={(e) => handleChange(e)}
					name="isCreateAccount"
				/>
				<label className="radio-form-label" htmlFor="create">
					Create Account
				</label>
			</form>
			{isCreateAccount ? (
				<AccountCreationForm />
			) : (
				<LoginForm
					loggedIn={loggedIn}
					setLoggedIn={setLoggedIn}
					activeUser={activeUser}
					setActiveUser={setActiveUser}
				/>
			)}
		</StyledAccountAccess>
	);
}
