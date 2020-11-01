import React from 'react';
import { Box, Carousel, Image } from 'grommet';
import styled from 'styled-components';

const data = [
    {
        'url':'//v2.grommet.io/assets/Wilderpeople_Ricky.jpg',
        'description': 'description1'
    },
    {
        'url':'//v2.grommet.io/assets/IMG_4245.jpg',
        'description': 'description1'
    },
    {
        'url':'//v2.grommet.io/assets/IMG_4210.jpg',
        'description': 'description1'
    },
    {
        'url':'https://avatars1.githubusercontent.com/u/14203820?s=280&v=4',
        'description': 'description1'
    },
    {
        'url':'https://developer.hpe.com/img/hpe-dev-grommet-gremlin-rockin-static.svg',
        'description': 'description1'
    },
    {
        'url':'https://developer.hpe.com/img/hpe-dev-grommet-gremlin-rockin-static.svg',
        'description': 'description1'
    },
    {
        'url':'//v2.grommet.io/assets/Wilderpeople_Ricky.jpg',
        'description': 'description1'
    },
    {
        'url':'//v2.grommet.io/assets/IMG_4245.jpg',
        'description': 'description1'
    },
    {
        'url':'//v2.grommet.io/assets/IMG_4210.jpg',
        'description': 'description1'
    },
    {
        'url':'https://avatars1.githubusercontent.com/u/14203820?s=280&v=4',
        'description': 'description1'
    },
];

const CostumImage = styled(Image)`
        transition: all 100ms;
        &:hover {
            transform: scale(1.1);
        }
    `

const Caroussel = () => (
    
   <Box direction='row' wrap='true' fill='vertical' justify='center' align='center'>
       {
           data.map((img) =>    {
               return(
                    <Box  width='medium'>
                        <CostumImage key={img.url} src={img.url} fit="contain" />
                    </Box>
                
               )
           })
       }
   </Box>
);

export default Caroussel;