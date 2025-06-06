import React from "react";
import { Box, Paper, useTheme } from "@mui/material";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { red } from "@mui/material/colors";

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 1000,
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          bgcolor: theme.palette.background.paper, // ← فعّل هذا السطر
        }}
      >
        <ContactInfo />
        <ContactForm />
      </Paper>
    </Box>
  );
};

export default ContactSection;