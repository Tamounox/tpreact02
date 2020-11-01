import React from 'react'
import { Box, Heading } from 'grommet';
import Caroussel from './Caroussel';

export const Portfolio = () => {
    return (
       <Box justify='center' align='center' direction='column' background='light-3' >
            <Heading>Portfolio</Heading>
            <Caroussel/>
       </Box>
    )
}
