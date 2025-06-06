import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactForm = () => {
  const theme = useTheme();

  return (
    <Box
      component="form"
      sx={{
        p: 4,
        flex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.text.primary, // أضف هذا السطر
      }}
    >
      <Typography variant="h4" mb={3} align="center">
        Contact Me
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        flexDirection="column"
      >
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              InputLabelProps={{
                sx: { color: theme.palette.text.secondary },
              }}
              InputProps={{
                sx: { color: theme.palette.text.primary },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                mb: 2,
              }}
            />
          </MotionBox>
        </Grid>

        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              InputLabelProps={{
                sx: { color: theme.palette.text.secondary },
              }}
              InputProps={{
                sx: { color: theme.palette.text.primary },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                mb: 2,
              }}
            />
          </MotionBox>
        </Grid>

        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
          >
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              InputLabelProps={{
                sx: { color: theme.palette.text.secondary },
              }}
              InputProps={{
                sx: { color: theme.palette.text.primary },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                mb: 2,
              }}
            />
          </MotionBox>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center">
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button variant="contained" size="large">
              Send
            </Button>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
