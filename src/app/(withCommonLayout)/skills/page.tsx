"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML 5", level: 90 },
      { name: "CSS 3", level: 80 },
      { name: "JavaScript (ES6)", level: 70 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap 5", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
];

const Skills = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography variant="h4" textAlign="center" mt={4}>
        My Skills
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={5}
        mt={4}
      >
        {skills.map((skillCategory) => (
          <Box
            key={skillCategory.category}
            sx={{ ml: { xs: 0, md: 5 } }}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <Typography variant="h5" textAlign="center">
              {skillCategory.category}:
            </Typography>
            {skillCategory.items.map((skill) => (
              <Box mt={5} key={skill.name}>
                <Typography>{skill.name}</Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    className="progress-label"
                    mr={3}
                  >{`${skill.level}%`}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{ width: "75%", mt: 1 }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
