import React from "react";
import { useState } from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ToleranciaBaja from "components/baja";
import ToleranciaMedia from "components/media";
import ToleranciaAlta from "components/alta";
export default (() => {
	const [startDate, setStartDate] = useState(new Date());
	const [numberOfDays, setNumberOfDays] = useState(0);
	const [toleranciaBaja, setToleranciaBaja] = useState(false);
	const [toleranciaMedia, setToleranciaMedia] = useState(false);
	const [toleranciaAlta, setToleranciaAlta] = useState(false);

	const calculateTolerance = (date) => {
		setStartDate(date)
		const now = new Date();
		const difference = now - date;
		const TOLERANCIA_ALTA = 30;
		//const TOLERANCIA_MEDIA = 60;
		const TOLERANCIA_BAJA = 120

		const days = Number.parseInt(difference / (1000 * 3600 * 24));
		setNumberOfDays(days);

		//reset
		setToleranciaMedia(false); setToleranciaBaja(false); setToleranciaAlta(false);

		if (days <= TOLERANCIA_ALTA)
			setToleranciaAlta(true);
		else if (days <= TOLERANCIA_BAJA)
			setToleranciaMedia(true);
		else
			setToleranciaBaja(true);
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Calculador de tolerancia
			</title>
		</Helmet>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Tolerancia
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Usando esta aplicacion, vas a poder calcular tu tolerancia respecto al MDMA, y cuanto tiempo deberias esperar para volver a tomar.
				Recuerden siempre esto es una guia, y a pesar de respetar los descansos y las dosis, no deja de ser una droga, a la cual hay que tenerle
				respeto
			</Text>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Datos
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0" />
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Por favor, elegi la fecha de la ultima toma:{" "}
			</Text>
			<DatePicker
				className="datePicker"
				display="block"
				selected={startDate}
				onChange={(date) => calculateTolerance(date)}
				popperPlacement="bottom"
				maxDate={new Date()}
			/>
		</Section>

		{toleranciaBaja &&
			<ToleranciaBaja days={numberOfDays} />
		}

		{toleranciaMedia &&
			<ToleranciaMedia days={numberOfDays} />
		}

		{toleranciaAlta &&
			<ToleranciaAlta days={numberOfDays} />
		}

		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Como calculamos esto?
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" color="#F7FBFF" font="--base">
					<p>
						El tiempo <strong>minimo</strong> entre tomas de MDMA debe ser 30 dias.
						Menos de esto, es muy perjudicial para tu salud, dado que la serotonina recien empieza a generarse nuevamente en el cerebro a los 20 dias de la toma.
					</p>
					<p>
						Lo ideal es dejar +90 dias entre tomas. Mientras menos tomes, mejor te va a pegar.
					</p>
					<p>
						Te invitamos a leer nuestro hilo en el foro dedicado a la tolerancia:

						<Link
							padding={"5px 12px 4px"}
							background-color={"--dark"}
							color={"--light"}
							cursor={"pointer"}
							href={"https://argenpills.org/showthread.php?tid=2468"}
							target={"_blank"}
						>Que es la tolerancia?</Link>
					</p>
				</Text>
			</Box>
		</Section>

		<RawHtml>
			<style place={"endOfHead"} rawKey={"631a68a2f45b7e002479cd76"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n.datePicker {font-size:24px;}"}
			</style>
		</RawHtml>
	</Theme>;
});