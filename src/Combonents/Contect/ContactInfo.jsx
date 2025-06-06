import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Email, Phone, LocationOn, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

const ContactInfo = () => {
  const theme = useTheme();
  const whatsappUrl = `https://wa.me/967777960919?text=مرحبا،%20أرغب%20بالتواصل%20معك`;

  return (
    <Box
      sx={{
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        bgcolor: theme.palette.background.paper,
        p: 4,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        boxSizing: "border-box",
        borderRadius: { xs: 0, md: "0 0 0 32px" },
      }}
    >
      <Typography variant="h5" textAlign="center">
        تواصل معي
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <Phone />
          <Typography variant="body1">+967 777 960 919</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <LocationOn />
          <Typography variant="body1">الرياض، السعودية</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Email />
          <Typography variant="body1">aymnahmedalrjawy@gmail.com</Typography>
        </Box>
      </Box>

      <Box mt={2} display="flex" justifyContent="center" gap={1}>
        <IconButton href="https://github.com/Aymn-Ahmed" target="_blank" sx={{ color: "#fff" }}>
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/aymen-alrjwy" target="_blank" sx={{ color: "#fff" }}>
          <LinkedIn />
        </IconButton>
        <IconButton href={whatsappUrl} target="_blank" sx={{ color: "#25D366" }}>
          <WhatsApp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactInfo;
