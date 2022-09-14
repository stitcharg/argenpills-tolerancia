import React from 'react';
import { Text, Section } from "@quarkly/widgets";

const ToleranciaBaja = ({ days }) => {
    return (
        <Section
            text-align="center"
            background-color="--primary"
            color="--light"
            padding="80px 0"
            sm-padding="40px 0"
            background="--color-green"
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
                Tolerancia Baja
            </Text>
            <Text as="p" font="--lead" margin="40px 0 20px 0">
                Entre la ultima toma y la fecha de hoy pasaron {days}. Son mas de <strong>120 dias</strong>, por lo tanto tu tolerancia se puede considerar baja
            </Text>
        </Section>
    );
};

export default ToleranciaBaja;