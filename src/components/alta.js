import React from 'react';
import { Text, Section } from "@quarkly/widgets";

const ToleranciaAlta = ({ days }) => {
    return (
        <Section
            text-align="center"
            background-color="--primary"
            color="--light"
            padding="80px 0"
            sm-padding="40px 0"
            background="--color-red"
        >
            <Text
                as="h5"
                font="--lead"
                margin="10px 0 0 0"
                text-transform="uppercase"
                letter-spacing="5px"
            >
                Tolerancia
            </Text>
            <Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
                Tolerancia alta
            </Text>
            <Text as="p" font="--lead" margin="40px 0 20px 0">
                Entre la ultima toma y la fecha de hoy, pasaron <strong>{days}</strong> dias. Son <strong>menos de 30 dias</strong>, por lo tanto tu tolerancia es alta. Te recomendamos esperar un poco para volver a tomar MDMA, o consumir
                otra sustancia que no tenga sinergia con el MDMA
            </Text>
        </Section>
    );
};

export default ToleranciaAlta;