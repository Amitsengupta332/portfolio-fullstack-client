"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const projectDetails = [
  {
    name: "Tandoori Time",
    image: "https://i.ibb.co/TPQKBDW/Tandoori.png",
    technology: "React, Node.js",
    description:
      "A website where users can explore master chefs and their recipes, add them to favorites, and access special features like blog downloads and food artisan highlights. Built with React and Node.js, incorporating CRUD operations, Context API for state management, and Firebase Authentication for secure access.",
    tools: "Tailwind CSS, Firebase, Express",
    clientLink: "https://github.com/Amitsengupta332/Tandori_Time-Client",
    serverLink: "https://github.com/Amitsengupta332/Tandori_Time-Server",
    liveSiteLink: "https://chef-recipe-hunter-9c5cf.web.app/",
  },
  {
    name: "Star Sports",
    image: "https://i.ibb.co/9HbCbVv/star-sport.png",
    technology: "React, Node.js, MongoDb",
    tools: "Tailwind CSS, Firebase, Express",
    description:
      "A website for exploring and adding children's toys to the cart. Built with React, Node.js, and MongoDB, featuring Firebase Authentication, seamless product loading from MongoDB, and search and sorting functionality for an improved user experience.",
    clientLink: "https://github.com/Amitsengupta332/Star-sports",
    serverLink: "https://github.com/Amitsengupta332/Star-sports-server",
    liveSiteLink: "https://toy-marketplace-5ed0a.web.app/",
  },
  {
    name: "Shutterbug Academy",
    image: "https://i.ibb.co/xJ0Ptw5/Shutterberg-Academy.png",
    technology: "React, Node.js, MongoDb",
    tools: "Tailwind CSS,Daisy Ui,Firebase, Express",
    description:
      "A role-based website for administrators, instructors, and students interested in photography. Built with React, Node.js, and MongoDB, utilizing Tailwind CSS and Daisy UI for styling, and integrating Firebase and Express for authentication and server-side APIs. Provides an immersive online learning experience for photography enthusiasts.",
    clientLink: "https://github.com/Amitsengupta332/Shutterbug-Academy-Client",
    serverLink: "https://github.com/Amitsengupta332/Shutterbug-Academy-Server",
    liveSiteLink:
      "https://summer-camp-school-7bd49.web.app/?fbclid=IwAR3BZdVhwbz_sQutaPH6LcYGeOVhn7c8LJD0URfP1VouaicHYR2Uiuv8aMs",
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography variant="h4" align="center" mt={4}>
        My Projects
      </Typography>
      <Grid container spacing={5} mt={2}>
        {projectDetails.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                transition: "transform 0.3s",
              }}
            >
              <CardActionArea
                component="a"
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Technology: {project.technology}
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" mt={2}>
                    Tools: {project.tools}
                  </Typography>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.clientLink}
                      target="_blank"
                    >
                      Client
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.serverLink}
                      target="_blank"
                    >
                      Server
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.liveSiteLink}
                      target="_blank"
                    >
                      Live
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
