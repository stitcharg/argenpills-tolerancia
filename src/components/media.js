import React from 'react';
import { Text, Section } from "@quarkly/widgets";

const ToleranciaMedia = ({ days }) => {
    return (
        <Section
            text-align="center"
            background-color="--primary"
            color="--light"
            padding="80px 0"
            sm-padding="40px 0"
            background="--color-orange"
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
                Tolerancia Media
            </Text>
            <Text as="p" font="--lead" margin="40px 0 20px 0">
                Entre la ultima toma y la fecha de hoy, pasaron <strong>{days}</strong>. Son <strong>mas de 60 dias</strong>, por lo tanto tu tolerancia se puede considerar media
            </Text>
        </Section>
    );
};

export default ToleranciaMedia;