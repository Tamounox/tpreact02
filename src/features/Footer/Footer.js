import React from 'react';

import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
} from 'grommet-icons';

import { Anchor, Box, Footer, Main, Text } from 'grommet';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="brand" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="brand" />}
    />
  </Box>
);

const SectionFooter = () => (
  <Box>
    <Main background="light-2" elevation="large" pad="medium" gap="large">
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>
    <Footer background="neutral-3" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <GrommetIcon color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          React Tp
        </Text>
      </Box>
      <Media />
      <Text textAlign="center" size="xsmall">
        ©Copyright
      </Text>
    </Footer>
    </Box>
);

export default SectionFooter;