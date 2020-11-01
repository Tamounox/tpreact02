import React, { Component } from 'react'
import { Box, Heading } from 'grommet';

export class Welcome extends Component {
    render() {
        return (
            <Box align='center' justify='center'>
                <Heading>Bienvenu sur mon profil</Heading>
            </Box>
        )
    }
}

export default Welcome
