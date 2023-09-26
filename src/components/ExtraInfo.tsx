import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react"

export const ExtraInfo = () => {
	return (
		<Box w="100%" bgColor="black" textColor="white" p={{ base: 2, sm: 2, lg: 20 }}>
			<HStack display={{ sm: "flex" }} alignItems="flex-start">
				<Box p={5}>
					<Heading size="xl" as="h2">C&oacute;mo calculamos esto?</Heading>
				</Box>
				<Box>
					<Text>
						El tiempo m&iacute;nimo entre tomas de &eacute;xtasis/MDMA debe ser 30 dias. Menos de esto, es muy perjudicial para tu salud, dado que la serotonina reci&eacute;n empieza a generarse nuevamente en el cerebro a los 20 dias de la toma. <br />
						Lo ideal es espaciar <strong>+90 dias</strong> entre tomas. Mientras menos tomes, mejor te va a pegar.<br />
						Te invitamos a visitar nuestro sitio con la explicaci&oacute;n de <a href="https://descansos.argenpills.info">porque es importante descansar 30 dias (o mas) entre tomas de &eacute;xtasis</a> y 
						tambi&eacute;n leer nuestro hilo en el foro dedicado a la tolerancia: <a href="https://argenpills.org/showthread.php?tid=2468">Que es la tolerancia?</a>.
					</Text>
				</Box>
			</HStack>
		</Box>
	)
}
