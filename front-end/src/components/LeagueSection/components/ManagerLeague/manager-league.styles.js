import styled from "styled-components";

export const StyledManagerLeague = styled.div`
	background-color: blueviolet;

	h2 {
		margin-top: 0px;
	}

	.owned-leagues {
		width: 85%;
		background-color: black;
		color: white;
		position: relative;
		margin: 0 auto;

		&-individual {
			border: 1px solid white;

			width: 50%;
			position: relative;
			margin: 5px auto;
		}
	}
`;
