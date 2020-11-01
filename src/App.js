import React from 'react';
import { Grommet, Box, Main, Heading, Text } from 'grommet';
import { Welcome } from './features/Body/Welcome';
import { Carte } from './features/Body/Card';
import { Map } from './features/Body/Map';
import data from './data.json';
import Vid from './features/Body/Video';
import Stats from './features/Body/Stats';
import Contact from './features/Contact/Contact';
import Footer from './features/Footer/Footer';
import Entete from './features/Header/Header';
import { Projets } from './features/Body/Projets';
import { Portfolio } from './features/Body/Portfolio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export const App = () => {
  return(
    <Router>
      <Grommet theme={theme} full>
        <Entete/>
        <Welcome />
        <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            
            <Route path="/">
          <Main background='{neutral-3}' justify='between'>
            <Box responsive='true' margin='fill' direction='row' wrap='true' justify='around'>
            {
              data.map((info) => {
                return (
                  <Carte wrap='true' key={info.name} name={info.name} description={info.description} id={info.id} footer={info.footer} />
                )
              })
            }
            </Box>
          </Main>
          <Box id='golf' background='dark-2' pad='large' align='center'>
            <Heading alignSelf='center'>Suivez mon parcours de Golf </Heading>
            <Text alignSelf='center'>En effet vous pourrez me suivre sur cette Map lors de mes différents tournois du circuit mondial !</Text>
            <Map/>
          </Box>
          <Box height='large'>
              <Vid video='https://youtu.be/CZZWMkElNlY'/>
          </Box>
          <Box>
              <Stats/>
          </Box>
          <Box height='large'>
              <Vid fit='content' video='http://localhost:3000/cs.mp4'/>
          </Box>
          <Projets/>
          <Portfolio/>
          </Route>
        </Switch>
        <Footer/>
      </Grommet>
      
    </Router>
    )
}

export default App
