import React from "react";
import { Box } from "@mui/material";
import SkillText from "./SkillText";
import SingleSkill from "./SingleSkill";
import { skills } from "../../Constants/skillsData";


const SkillMatrix = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 3,
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SkillText />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 4,
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, idx) => (
          <SingleSkill key={idx} {...skill} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillMatrix;
