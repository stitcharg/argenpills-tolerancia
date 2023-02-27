import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import { CalculatorComponent } from './components/Calculator'
import { ExtraInfo } from './components/ExtraInfo'
import { FooterComponent } from './components/Footer'
import { HeaderComponent } from './components/Header'
import ReactGA from "react-ga4";

function App() {

	ReactGA.initialize('G-47M9J4N9CC');
	const pageUrl = "/"
	ReactGA.send({ hitType: "pageview", page: pageUrl });

	return (
		<div className="App">
			<HeaderComponent />
			<Flex>
				<VStack p={0} m={0} w="100%" spacing="0">

					<CalculatorComponent />

					<ExtraInfo />

					<FooterComponent />
				</VStack>
			</Flex>
		</div>
	)
}

export default App
