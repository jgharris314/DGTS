import styled from "styled-components";
import { darkBackgroundColor } from "../../App.variables";

export const StyledActiveLeagueInfo = styled.div`
	background-color: ${darkBackgroundColor};
	color: white;

	.error-msg {
		height: 50px;
		background-color: red;
		width: 50%;
		position: relative;
		margin: 10px auto;
		padding: 2%;
		text-align: center;
	}

	.member-list {
		display: flex;
		flex-direction: column;
		width: 85%;
		position: relative;
		margin: 0 auto;

		&-row {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;

			&-col {
				display: flex;
				flex-direction: column;
				/* width: 10%; */
				margin: 0 10px;
			}
		}
	}
`;
