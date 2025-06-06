import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NavLogo = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        mr: 4,
        display: { xs: 'none', md: 'flex' },
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing: '.1rem',
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.secondary.light,
        },
      }}
    >
      Aymn Ahmed Al_Rjwy
    </Typography>
  );
};

export default NavLogo;
