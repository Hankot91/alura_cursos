import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

import { colorPrimary } from "../UI/variables";

const StyleHeader = styled.nav`
	background-color: ${colorPrimary};
	display: flex;
	justify-content: space-between;
	padding: 0 15vw;
	height: 10vh;
	align-items: center;
`;

const Logo = styled.img`
	height: 50px;
	width: 50px;
`;

const ButtonHeader = styled.a`
	text-align: center;
	border-radius: 3px;
	padding: 5px 20px;
	margin: 0 10px;
	font-weight: 600;
	border: 2px solid white;
	color:  ${(props) => props.primary ? "white": colorPrimary};
	background: ${(props) => props.primary ? "transparent": "white"};
`;

const Header = () => {
	return (
		<StyleHeader>
			<Logo src={logo} alt="Logo Smart Bank" />
			<div>
				<ButtonHeader  href="https://google.com">
					Ayuda
				</ButtonHeader>
				<ButtonHeader  primary="true" href="https://google.com">
					Salir
				</ButtonHeader>
			</div>
		</StyleHeader>
	);
};

export default Header;
