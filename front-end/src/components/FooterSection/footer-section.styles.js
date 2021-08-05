import styled from "styled-components";

export const StyledFooterSection = styled.div`
	background-color: black;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 5;
	height: 50px;
	background-image: linear-gradient(
		-45deg,
		rgba(20, 20, 20, 0.8),
		rgba(255, 255, 255, 0.8),
		rgba(20, 20, 20, 0.8)
	);
	font-weight: 700;
	color: black;
	font-size: 20px;
`;
