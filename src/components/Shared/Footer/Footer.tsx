import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: "#DBE6F0",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" color="text.secondary">
        © created by Amit Sen Gupta. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
