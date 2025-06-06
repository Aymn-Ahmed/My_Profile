import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const SkillText = () => {
  const theme = useTheme(); // استخدام الثيم بدل الألوان الثابتة

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: theme.typography.fontWeightBold,
          mb: 6,
          textAlign: "center",
          background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`, // استخدام الثيم بدل كود الألوان
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills
      </Typography>
    </motion.div>
  );
};

export default SkillText;
