import React from "react";
import { Box, Typography, LinearProgress, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const SingleSkill = ({ name, level, icon }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 4,
          background: `${theme.palette.background.paper}`,
          boxShadow: `0 8px 24px ${theme.palette.primary.main}33`,
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: `0 12px 36px ${theme.palette.primary.main}55`,
          },
        }}
      >
        {/* العنوان + الأيقونة */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {icon && (
            <Box fontSize={32} color={theme.palette.text.primary}>
              {icon}
            </Box>
          )}
          <Typography
            variant="h6"
            sx={{
              fontWeight: theme.typography.fontWeightMedium,
              ml: 2,
              color: theme.palette.text.primary, // توحيد لون النص
            }}
          >
            {name}
          </Typography>
        </Box>

        {/* مؤشر المهارة */}
        <LinearProgress
          variant="determinate"
          value={level}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: theme.palette.grey[300],
            "& .MuiLinearProgress-bar": {
              background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            },
          }}
        />
      </Box>
    </motion.div>
  );
};

export default SingleSkill;
