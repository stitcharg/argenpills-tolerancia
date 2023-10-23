import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import { CalculatorComponent } from './components/Calculator'
import { ExtraInfo } from './components/ExtraInfo'
import { FooterComponent } from './components/Footer'
import { HeaderComponent } from './components/Header'
import { clarity } from 'react-microsoft-clarity';

function App() {

	//if (import.meta.env.PROD)
	useEffect(() => {
		clarity.init(
			import.meta.env.VITE_CLARITY_ID
		);
	}, []);

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
