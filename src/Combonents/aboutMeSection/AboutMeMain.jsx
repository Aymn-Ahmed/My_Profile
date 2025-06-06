import React from 'react';
import { Box, Paper } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';

function AboutMeMain() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        px: 3,
        py: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: 'background.default', // خلي الصفحة كلها بنفس لون الخلفية
      }}
    >
      <Paper
        elevation={4}
        sx={{
          backdropFilter: 'blur(10px)',
          color: theme.palette.text.primary,
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          // color: theme.palette.primary.main,
          borderRadius: '20px',
          padding: { xs: 4, md: 8 },
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          zIndex: 1,
          width: '100%',
          maxWidth: '1100px',
          border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
          boxShadow: `0 8px 32px 0 ${alpha(theme.palette.primary.main, 4.2)}`, // ظل ناعم من لون الثيم
        }}
      >
        <Box sx={{ flex: 1 }}>
          <AboutMeImage />
        </Box>

        <Box sx={{ flex: 2 }}>
          <AboutMeText />
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutMeMain;
