import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List";

const Div = styled.div`
	background-color: ${({ theme }) => theme.body};
	min-height: 90vh;
	padding: 0px 15vw;
`;

const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const Container = () => {
	return (
		<Div>
			<Title>Smart Bank</Title>
			<Section>
				<Account />
				<List />
			</Section>
		</Div>
	);
};

export default Container;
