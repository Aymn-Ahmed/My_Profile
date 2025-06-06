import React from 'react';
import { Box, useTheme } from '@mui/material';
import heroImg from '../../assets/aymn2.jpg';

function HeroPic() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 220,
        height: 220,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `5px solid ${theme.palette.primary.light}`,
        boxShadow: `0 0 30px ${theme.palette.primary.main}99`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 1s ease forwards',
        opacity: 0,
      }}
    >
      <Box
        component="img"
        src={heroImg}
        alt="Profile"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
}

export default HeroPic;
