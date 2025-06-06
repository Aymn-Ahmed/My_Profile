import React, { useState } from "react";
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";

function ContactFloatingButton() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleToggle = () => setOpen(!open);

  return (
    <>
      <Fab
        color="primary"
        onClick={handleToggle}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <ContactMailIcon />
      </Fab>
<Dialog
  open={open}
  onClose={handleToggle}
  fullWidth // ياخد العرض كامل على الجوال
  maxWidth="xs" // حجم صغير وثابت على الجوال
  PaperProps={{
    sx: {
      borderRadius: 3,
      p: 2,
      backgroundColor: "hsla(240, 100.00%, 17.80%, 0.99)", // خلفية كحلي زجاجية
      backdropFilter: "blur(8px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      color: theme.palette.text.primary,
      mx: 2, // تباعد أفقي خفيف للجوال
    },
  }}
>

        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            mb: 1,
          }}
        >
          Get in Touch
        </DialogTitle>

        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={2}
            sx={{ px: 1 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <ContactMailIcon color="primary" />
              <Typography variant="body1">aymanahmedalrjwy@gmail.com</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon color="success" />
              <Typography variant="body1">+967 777 960 919</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <WhatsAppIcon sx={{ color: "#25D366" }} />
              <Typography variant="body1">
                <a
                  href="https://wa.me/967777960919"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#25D366",
                  }}
                >
                  Chat on WhatsApp
                </a>
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactFloatingButton;
