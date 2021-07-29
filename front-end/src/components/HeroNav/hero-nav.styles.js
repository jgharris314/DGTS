import styled from "styled-components";
import {
	darkBackgroundColor,
	lightTone,
	offTone,
	secondaryDark,
	midTone,
} from "../../App.variables";

export const StyledHeroNav = styled.div`
	background-color: ${darkBackgroundColor};
	color: ${lightTone};
	top: 0;
	left: 0;
	position: sticky;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
	z-index: 5;
	box-shadow: 0px 0px 60px inset ${secondaryDark};
	.hero-header {
		color: ${lightTone};
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 80%;
		position: relative;
		margin: 0 auto;
		border-radius: 5px;

		box-shadow: 0px 0px 100px inset ${secondaryDark};
		padding: 0px;
		margin-top: 10px;
	}
	.nav-list {
		display: flex;
		flex-direction: row;
		width: 80%;
		justify-content: space-evenly;
		padding-left: 0;
		margin: 0 auto;

		&-item {
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

			&:hover {
				background-color: ${midTone};
			}
		}
	}
`;
