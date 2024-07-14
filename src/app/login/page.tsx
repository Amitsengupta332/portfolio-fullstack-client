"use client";
import PFForm from "@/components/Form/PFForm";
import PFInput from "@/components/Form/PFInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

const LoginLoginPage = () => {
  const [error, setError] = useState<string | undefined>();

  const handleLogin = async (values: FieldValues) => {};
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            p: 4,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login Here
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  background: "red",
                  color: "white",
                  marginTop: "5px",
                  borderRadius: "2px",
                  padding: "1px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <PFForm
              onSubmit={handleLogin}
              // resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={6}>
                  <PFInput name="email" label="Email" size="small" />
                </Grid>
                <Grid item xs={6}>
                  <PFInput
                    name="password"
                    label="Password"
                    size="small"
                    type="password"
                  />
                </Grid>
              </Grid>

              <Box component="div">
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  <Box component={"span"} color={"#FFFFFF"}>
                    Login
                  </Box>
                </Button>
              </Box>
            </PFForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginLoginPage;
