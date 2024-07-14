"use client";
import React, { useRef } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const form = useRef();
  //   const ServiceId = import.meta.env.VITE_SERVICE_ID;
  //   const TemplateId = import.meta.env.VITE_TEMPLATE_ID;
  //   const PublicKey = import.meta.env.VITE_PUBLIC_KEY;

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm(ServiceId, TemplateId, form.current, PublicKey).then(
  //       (result) => {
  //         console.log(result.text);
  //         toast.success("Email Sent Successfully", {
  //           duration: 3000,
  //           position: "top-center",
  //         });
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         toast.error("Failed to send email", {
  //           duration: 3000,
  //           position: "top-center",
  //         });
  //       }
  //     );
  //   };

  return (
    <Box
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {/*     onSubmit={sendEmail} */}
      {/* <ToastContainer /> */}
      <Box component="form" ref={form} maxWidth="600px" width="100%">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Box mb={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            name="user_name"
            required
          />
        </Box>

        <Box mb={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            name="user_email"
            required
          />
        </Box>

        <Box mb={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            name="message"
            multiline
            rows={6}
            required
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
