import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";

const SingleProject = ({ title, description, image, demoLink, codeLink }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 5,
        transition: "transform 0.3s, box-shadow 0.3s",
        bgcolor: theme.palette.background.paper,  // استخدام لون الخلفية من الثيم
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: theme.shadows[6], // استخدام ظل موحد من الثيم
        },
      }}
    >
      {/* صورة المشروع */}
      <CardMedia component="img" height="200" image={image} alt={title} />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color={theme.palette.text.primary}>
          {title}
        </Typography>
        <Typography variant="body2" color={theme.palette.text.secondary}>
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
        <Button size="small" color="primary" href={demoLink} target="_blank" rel="noopener noreferrer">
          Show Demo
        </Button>
        <Button size="small" color="secondary" href={codeLink} target="_blank" rel="noopener noreferrer">
          View Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleProject;
