"use client";
import PFForm from "@/components/Form/PFForm";
import PFInput from "@/components/Form/PFInput";
import { useCreateProjectMutation } from "@/redux/api/projectApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateAdmin = () => {
  const [createProject] = useCreateProjectMutation();
  const handleCreateProject = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await createProject({ data });
      if (res?.data?.id) {
        toast.success("Created Project", {
          duration: 2000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                    name="frontEndRepo"
                    fullWidth
                    label="GitHub Client Repo"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="backEndRepo"
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

                <Grid item md={6}>
                  <PFInput
                    name="images"
                    fullWidth
                    label="Images"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="technologyUsed"
                    fullWidth
                    label="Technology"
                    size="small"
                  />
                </Grid>

                <Grid item md={12}>
                  <PFInput
                    name="shortDescription"
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
