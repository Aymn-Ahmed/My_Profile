import React from "react";
import { Box, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import projectData from "../../Constants/projectData"; // تأكد من صحة المسار

const ProjectMain = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container>
        <ProjectText />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {projectData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <SingleProject {...project} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectMain;
