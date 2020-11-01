import React from 'react'
import { Box, Heading, Paragraph, DataTable, Meter, Text } from 'grommet';

export const Projets = () => {
    return (
        <Box
        direction="row" 
        wrap='true'
        >
            <Box pad={{left: 'large', right: 'large'}} justify='stretch' flex='grow' height='large' width='large' background="light-5">
                <Heading>
                    Skills
                </Heading>
                <DataTable
  columns={[
    {
      property: 'name',
      header: <Text>Name</Text>,
      primary: true,
    },
    {
      property: 'percent',
      header: 'Complete',
      render: datum => (
        <Box pad={{ vertical: 'medium' }}>
          <Meter
            values={[{ value: datum.percent, color: datum.percent > 50 ? 'neutral-3' : 'neutral-4' }]}
            thickness="medium"
            size="medium"
            background='light-3'
          />
        </Box>
      ),
    },
  ]}
  data={[
    { name: 'Angular', percent: 80 },
    { name: 'AngularJS', percent: 90 },
    { name: 'React', percent: 30 },
    { name: 'Node js', percent: 60 },
    { name: 'c#', percent: 80 },
    { name: 'Vue', percent: 60 },
  ]}
/>

                
            </Box>
            <Box pad={{left: 'large', right: 'large'}}  flex='grow' height='large' background="light-2">
                <Heading alignSelf="end">
                    Projets
                </Heading>
                <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id elit nunc. Vivamus placerat massa eu dui sodales, eget imperdiet velit venenatis. Donec varius posuere nunc, vitae porta ante dignissim id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada nisi eget aliquam vehicula. Fusce ac volutpat mauris. Nulla nec libero rutrum velit mollis feugiat. In eget vulputate nulla. Integer sodales fermentum metus, sed elementum risus blandit sit amet. Ut posuere molestie mauris sodales sagittis. Duis luctus dolor quis odio pulvinar bibendum. Nunc ullamcorper nunc eget lacus euismod, non mollis erat laoreet. In congue odio vitae mi ultrices tempus.
                </Paragraph>
            </Box>
        </Box>
    )
}
