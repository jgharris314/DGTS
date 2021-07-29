import styled from "styled-components";
import { lightTone, offTone, midTone } from "../../App.variables";
export const StyledLeagueSection = styled.div`
	background-color: coral;
	p {
		margin-top: 0px;
	}
	.account-button {
		color: ${lightTone};
		display: flex;
		flex-direction: column;
		padding: 1%;
		margin: 0 auto;
		background-color: ${offTone};
		box-shadow: 0px 0px 5px inset ${lightTone};
		border-radius: 5px;
		margin-top: 10px;
		text-decoration: none;
		width: 20%;

		&:hover {
			background-color: ${midTone};
		}
	}
`;
