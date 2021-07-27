import styled from "styled-components";

export const StyledHeroNav = styled.div`
	background-color: magenta;
	top: 0;
	left: 0;
	position: sticky;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
	z-index: 5;
	.hero-header {
		display: flex;
		flex-direction: row;
		/* text-align: right; */
		width: 100%;
		position: relative;
		margin: 0 auto;
	}
	.nav-list {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-evenly;
		padding-left: 0;

		&-item {
			display: flex;
			flex-direction: column;
			/* width: 25%; */
			border: 1px solid black;
			padding: 1%;

			&:hover {
				background-color: green;
			}
		}
	}
`;
