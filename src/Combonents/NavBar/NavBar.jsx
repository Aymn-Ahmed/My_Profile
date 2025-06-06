import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Box } from '@mui/material'; // هنا أضفت Box
import { useTheme } from '@mui/material/styles';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavMenuMobile from './NavMenuMobile';

const NavBar = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(11, 19, 43, 0.85)',
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        color: theme.palette.text.primary,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLogo />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <NavMenuMobile
              anchorElNav={anchorElNav}
              handleOpen={handleOpenNavMenu}
              handleClose={handleCloseNavMenu}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
