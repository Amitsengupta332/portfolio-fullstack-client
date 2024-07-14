/* eslint-disable react/no-unescaped-entities */
"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Lottie from "lottie-react";
import sidehero from "@/assets/Animation - 1720890012403.json";

const HeroSection = () => {
  const onButtonClick = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 5 }}>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          minHeight="calc(100vh - 70px)"
          textAlign={{ xs: "center", md: "left" }}
        >
          <Box width={{ xs: "100%", md: "50%" }}>
            <Typography
              variant="h4"
              color="#2986cc"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
              }}
            >
              Hi I'm
            </Typography>
            <Typography
              variant="h3"
              color="#15295f"
              fontWeight="extraBold"
              gutterBottom
              sx={{
                whiteSpace: "nowrap",
                fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
              }}
            >
              Amit Sengupta
            </Typography>
            <Typography
              variant="h5"
              color="#15295f"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
              }}
            >
              Web Developer{" "}
              <span style={{ color: "#2986cc" }}>(Full-Stack)</span> Expert
            </Typography>
            <Typography
              variant="body1"
              color="#15295f"
              paragraph
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
              }}
            >
              I'm a self-taught web developer with a strong desire to create
              memorable digital experiences. I specialize in the MERN stack
              (MongoDB, Express.js, React.js, and Node.js) and place a strong
              emphasis on clean code, intuitive designs, and seamless
              functionality. Let's work together to make your ideas a reality
              and create creative online applications. Learn more about my
              talents and knowledge by exploring my portfolio and downloading my
              resume.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary">
                <Link
                  href="https://wa.me/01629532030"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  Contact me
                </Link>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={onButtonClick}
              >
                Download Resume
              </Button>
            </Stack>
          </Box>
          <Box
            width={{ xs: "100%", md: "50%" }}
            display={{ xs: "none", md: "block" }}
          >
            <Lottie animationData={sidehero} loop={true} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
