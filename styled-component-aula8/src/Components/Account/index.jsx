import React, { useState } from "react";
import styled from "styled-components";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Icon, Button, Box, Balance, Details, IconTheme } from "../UI";

const IconComponent = styled(Icon)`
	margin-top: 2px;
`;

const Account = () => {
	const [toggleState, untoggle] = useState(true);

	const toggleHandler = () => {
		untoggle((toggleState) => !toggleState);
	};

	return (
		<Box>
			<h2>Cuenta</h2>
			<div style={{ fontSize: "26px", padding: "20px 0" }}>
				Saldo disponible 
				<span style={{marginLeft:  "1rem"}}>
					<IconTheme src={dinero} alt="Icono de saldo" />
				</span>
				{toggleState ? (
					<Balance>
						<Details>$</Details> 8,621.50
					</Balance>
				) : null}
			</div>

			<Button onClick={toggleHandler}>
				<IconComponent
					src={toggleState ? privado : ojo}
					alt="Privacidad de saldo"
				/>
			</Button>
		</Box>
	);
};

export default Account;
