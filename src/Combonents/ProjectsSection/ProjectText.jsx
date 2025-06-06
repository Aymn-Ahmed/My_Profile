import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProjectText = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color={theme.palette.text.primary} gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" color={theme.palette.text.secondary} maxWidth={600} mx="auto">
        Here are some of the projects I've worked on. Click on "Show Demo" to see the live version or "View Code" to check the source.
      </Typography>
    </Box>
  );
};

export default ProjectText;
