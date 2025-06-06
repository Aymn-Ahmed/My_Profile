import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function HeroText() {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 600, textAlign: 'center', mt: 4, zIndex: 1 }}>
      <Typography
        variant="h2"
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          animation: 'fadeIn 1.5s ease forwards',
          opacity: 0,
        }}
      >
        I'm Ayman Ahmed
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 2,
          color: theme.palette.text.secondary,
          animation: 'fadeIn 2.5s ease forwards',
          opacity: 0,
        }}
      >
        A passionate Full Stack Developer crafting beautiful and functional web applications.
      </Typography>
    </Box>
  );
}

export default HeroText;
