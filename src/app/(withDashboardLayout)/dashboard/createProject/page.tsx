"use client";
import PFForm from "@/components/Form/PFForm";
import PFInput from "@/components/Form/PFInput";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const CreateAdmin = () => {
  const handleCreateProject = async (data: FieldValues) => {};
  return (
    <Box>
      <Box bgcolor={"#FDF8F7"}>
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Add Project
            </Typography>
            <Typography fontWeight={400}>Create your project</Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={7}>
          <Box>
            <PFForm onSubmit={handleCreateProject}>
              <Grid container spacing={4} my={1}>
                <Grid item md={6}>
                  <PFInput name="title" fullWidth label="Title" size="small" />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="githubClient"
                    fullWidth
                    label="GitHub Client Repo"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="githubServer"
                    fullWidth
                    label="GitHub Server Repo"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="liveLink"
                    fullWidth
                    label="Deploy link"
                    size="small"
                  />
                </Grid>

                <Grid item md={12}>
                  <PFInput
                    name="description"
                    fullWidth
                    label="Description"
                    size="small"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
              >
                Add Project
              </Button>
            </PFForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateAdmin;
