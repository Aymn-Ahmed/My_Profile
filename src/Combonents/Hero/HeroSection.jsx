import React from 'react';
import { Box } from '@mui/material';
import HeroPic from './HeroPic';
import HeroText from './HeroText';

function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        px: 3,
        backgroundColor: 'background.default',
      }}
    >
      <HeroPic />
      <HeroText />

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default HeroSection;
  