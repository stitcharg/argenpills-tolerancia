import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import { CalculatorComponent } from './components/Calculator'
import { ExtraInfo } from './components/ExtraInfo'
import { FooterComponent } from './components/Footer'
import { HeaderComponent } from './components/Header'
import ReactGA from 'react-ga';

function App() {

	if (import.meta.env.PROD && typeof window !== 'undefined') {
		ReactGA.initialize('UA-221362845-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

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
