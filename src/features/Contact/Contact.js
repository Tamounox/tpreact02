import React from 'react'
import { Footer, Box } from 'grommet';
import Entete from '../Header/Header';
import Formulaire  from './Formulaire';

export const Contact = () => {
    return (
        <Box direction='row' align='center' justify='center'>
                <Formulaire/>
        </Box>
    )
}
export default Contact