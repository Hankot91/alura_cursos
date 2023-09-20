import styled from "styled-components";

const Icon = styled.img`
	height: 25px;
	width: 25px;
`;

const Button = styled.button`
	margin: 15px auto 0px auto;
	display: block;
	border-radius: 20px;
	background-color: #41d3be;
	border: none;
	color: ${({ theme }) => theme.inside};
	font-weight: 600;
	font-size: 14px;
	padding: 8px 20px;
	cursor: pointer;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${({theme}) => theme.inside};
	color: ${({theme}) => theme.text};
	border-radius: 5px;
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
	padding: 20px;
	width: 48%;

	@media (max-width: 800px) {
		width: 95%;
		margin: 5px;
	}
`;

const Balance = styled.div`
	font-weight: 700;
	font-size: 32px;
`;

const Details = styled.span`
	color: #41d3be;
	font-size: 24px;
`;

const ButtonTheme = styled.div`
	position: absolute;
	top: 3.3vh;
	right: 20px;
	background-color: inherit;
	border: none;
	cursor: pointer;
`;

const IconTheme = styled(Icon)`
	filter: ${({theme}) => theme.filter};
	`;
export { Icon, Button, Box, Balance, Details, ButtonTheme, IconTheme};
