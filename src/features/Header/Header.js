import React from 'react'
import { Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import { Link } from "react-router-dom";

const Entete = () => (
      <Header background="neutral-3" pad="medium" height="xsmall">
        <Link to="/">
        <Anchor
          href="#"
          icon={<GrommetIcon color="brand" />}
          label="React Tp"
          textDecoration='none'
        />
        </Link>
        <ResponsiveContext.Consumer>
          {size =>
            size === 'small' ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  icon={<MenuIcon color="brand" />}
                  items={[
                    {
                      label: <Link to="/contact"><Box textDecoration='none' pad="small">Contact</Box></Link>,
                    }
                  ]}
                />
              </Box>
            ) : (
                <Link to="/contact">
                    <Box justify="end" direction="row" gap="medium">
                        <Anchor
                        label="Contact"
                        />
                    </Box>
                </Link>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
);

export default Entete;
