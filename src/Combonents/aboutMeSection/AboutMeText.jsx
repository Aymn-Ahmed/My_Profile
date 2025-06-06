import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

function AboutMeText() {
  return (
    <Box
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        animation: `${fadeInUp} 1.5s ease forwards`,
        opacity: 0,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: 'primary.main', // لون الثيم الأساسي
          fontWeight: 'bold',
        }}
      >
        About Me
      </Typography>

      <Typography
        variant="body1"
        sx={{
          
          
          fontSize: '1.2rem',
          maxWidth: 500,
          mt: 2,
        }}
      >
        I'm Ayman, a Full Stack Developer passionate about building fast, responsive, and scalable web applications.
        I love clean code, modern UI/UX, and pushing my limits with new technologies.
      </Typography>
    </Box>
  );
}

export default AboutMeText;
