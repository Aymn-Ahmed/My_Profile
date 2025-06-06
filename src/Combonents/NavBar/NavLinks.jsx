import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { useTheme } from '@mui/material/styles';

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const NavLinks = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1 }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            component={Link}
            to={page.path}
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'none',
              fontWeight: theme.typography.fontWeightMedium,
              '&:hover': {
                color: theme.palette.secondary.main,
              },
            }}
          >
            {page.name}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          href="#contact"
          endIcon={<SouthEastIcon />}
          sx={{
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightBold,
            borderRadius: '40px',
            px: 3,
            boxShadow: `0 0 10px ${theme.palette.secondary.main}33`,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 12px ${theme.palette.secondary.main}4D`,
            },
          }}
        >
          Hire Me
        </Button>
      </Box>
    </>
  );
};

export default NavLinks;
