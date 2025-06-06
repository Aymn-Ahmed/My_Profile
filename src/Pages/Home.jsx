import React from "react";
import { Box, Container } from "@mui/material";
import AboutMeMain from "../Combonents/aboutMeSection/AboutMeMain";
import ProjectMain from "../Combonents/ProjectsSection/ProjectMain";
import HeroSection from "../Combonents/Hero/HeroSection";
import SkillsMain from "../Combonents/SkillsSection/SkillMatrix";
import ContactSection from "../Combonents/Contect/ContactSection";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        pt: 8, // عشان ما يتلاصق مع التوب
      }}
    >
      {/* Container عشان المحتوى ما يطلع برة */}
      <Container maxWidth="lg">
        <HeroSection />

        <Box sx={{ my: 8 }}>
          <AboutMeMain />
        </Box>

        <Box sx={{ my: 8 }}>
          <ProjectMain />
        </Box>

        <Box sx={{ my: 8 }}>
          <SkillsMain />
        </Box>

        <Box sx={{ my: 8 }}>
          <ContactSection />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
