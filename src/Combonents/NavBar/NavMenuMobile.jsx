import React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const NavMenuMobile = ({ anchorElNav, handleOpen, handleClose }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: '85%',
            maxWidth: 300,
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            boxShadow: theme.shadows[6],
            mt: 1,
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Menu
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {pages.map((page) => (
            <MenuItem
              key={page.name}
              onClick={handleClose}
              component={Link}
              to={page.path}
              selected={location.pathname === page.path}
              sx={{
                py: 1.5,
                px: 2,
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: theme.palette.action.selected,
                  fontWeight: 'bold',
                },
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <Typography textAlign="left">{page.name}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

export default NavMenuMobile;
