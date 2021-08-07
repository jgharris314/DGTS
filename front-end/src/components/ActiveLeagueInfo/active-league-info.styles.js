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
`;
