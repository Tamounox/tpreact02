import React from 'react';
import { WorldMap } from 'grommet';

export const Map = () => {
    return (
        <WorldMap
        fill='horizontal'
        color="brand"
        continents={[
          {
            name: 'Africa',
            color: 'black',
            onClick: (name) => {},
          },
          {
            name: 'Europe',
            color: 'blue',
            onClick: (name) => {},
          },
          {
            name: 'Australia',
            color: 'green',
            onClick: (name) => {},
          },
          {
            name: 'Asia',
            color: 'accent-4',
            onClick: (name) => {},
          },
          {
            name: 'North America',
            color: 'red',
            onClick: (name) => {},
          },
          {
            name: 'South America',
            color: 'red',
            onClick: (name) => {},
          },
        ]}
        onSelectPlace={(lat, lon) => {}}
        places={[
          {
            name: 'Tokyo',
            location: [35.709026, 139.731992],
            color: 'brand',
            onClick: (name) => {},
          },
        ]}
        selectColor="status-warning"
      />
    )
}


export default Map
