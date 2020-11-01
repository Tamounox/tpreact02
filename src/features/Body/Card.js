import React from 'react'
import { Card, CardBody, CardHeader, CardFooter, Button, Heading } from 'grommet';
import styled from 'styled-components';
import { Favorite } from 'grommet-icons';

export const Carte = ({name, description, footer, id}) => {
    const CostumCard = styled(Card)`
        transition: all 100ms;
        &:hover {
            transform: scale(1.1);
        }
    `
    return (
        <CostumCard margin='medium' href={id} height="medium" width="medium">
            <CardHeader  justify='center' color='{"color": "#fff"}' href={id} background='linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)' pad="medium"><Heading level='3'>{name}</Heading></CardHeader>
            <CardBody justify='center' href={id} background='' pad="medium">{description}</CardBody>
            <CardFooter justify='center' href={id} pad="medium" background='linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)'>
                <Button href={footer} incon={<Favorite color='red' />}
                />
            </CardFooter>
        </CostumCard>
    )
}

export default Carte
