import { Box, Paragraph, Heading, TextInput, Button, Image } from 'grommet';
import React from 'react'


export const Stats = () => {
    const [value, setValue] = React.useState('');
    // const [data, setData] = React.useState([data]);

    // const Search => (() => {
    //     const headers = new Headers();
    //     headers.append("TRN-Api-Key", "0656664f-b0c1-4e73-b585-b30bb23f13e3");
    //     const init = {headers: headers};
    //     fetch('https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/profile/steam/' +  value, init)
    //         .then((response) => response.data())
    //         .then((data) => setData(data))
    //         .catch((error) => console.error(error));
    // }, []);

    const onChange = event => setValue(event.target.value);
    return ( 
    <Box direction="row" wrap='true'>
            <Box pad={{left: 'large', right: 'large'}} flex='grow' height='large' background="light-2">
                <Heading>
                    Counter Strike
                </Heading>
                <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id elit nunc. Vivamus placerat massa eu dui sodales, eget imperdiet velit venenatis. Donec varius posuere nunc, vitae porta ante dignissim id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada nisi eget aliquam vehicula. Fusce ac volutpat mauris. Nulla nec libero rutrum velit mollis feugiat. In eget vulputate nulla. Integer sodales fermentum metus, sed elementum risus blandit sit amet. Ut posuere molestie mauris sodales sagittis. Duis luctus dolor quis odio pulvinar bibendum. Nunc ullamcorper nunc eget lacus euismod, non mollis erat laoreet. In congue odio vitae mi ultrices tempus.
                </Paragraph>
            </Box>
            <Box pad={{left: 'large', right: 'large'}} justify='stretch' flex='grow' height='large' width='large' background="light-5">
                <Heading alignSelf="end">
                    Counter Strike
                </Heading>
                <TextInput
                value={value}
                onChange={onChange}/>
                
                
                <Button onClick/>
            </Box>
        </Box>
    
    )
}

export default Stats