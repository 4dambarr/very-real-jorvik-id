import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;

	font-family: Arial, Helvetica, sans-serif;
	
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 77.5vh 72px;
`;

const Footer = styled.div`
	background-color: red;
`

const Details = styled.div`
	background-color: #747474;	
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
`

const DetailsTextHolder = styled.div`
	border-bottom: 1px solid white;
	color: white;
	height: 97.5px;
	width: 90vw;
	letter-spacing: 1.4px;
`

const DetailsText = styled.p`
	margin-top: 27px;
	margin-left: 17.5px;
	line-height: 1.5;
`

const BarcodeHolder = styled.div`
	color: white;
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

`

const Header = styled.div`
	display: flex;
	padding-top: 15px;
	justify-content: center;
	align-items: center;
`

export default function IdScreen() {
	return (
		<Container>
			<Header>
				Library Card
			</Header>
			<Details>
				<DetailsTextHolder>
					<DetailsText>
						Adam Barr <br/>
						Derwent	
					</DetailsText>
				</DetailsTextHolder>
				<BarcodeHolder>
					<p>Scan Me</p>
					<img src="https://cdn-dfhjh.nitrocdn.com/BzQnABYFnLkAUVnIDRwDtFjmHEaLtdtL/assets/images/optimized/rev-c133d21/wp-content/uploads/2015/02/barcode-3.png" />
					<p>Card Number: 280260019422847</p>
				</BarcodeHolder>
			</Details>
			<Footer />
		</Container>
	);
}