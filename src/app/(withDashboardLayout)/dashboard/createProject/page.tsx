"use client";
import PFForm from "@/components/Form/PFForm";
import PFImage from "@/components/Form/PFImage";
import PFInput from "@/components/Form/PFInput";
import PFQuill from "@/components/Form/PFQuil";
import { useCreateProjectMutation } from "@/redux/api/projectApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [createProject] = useCreateProjectMutation();
  // console.log(createProject);
  const handleCreateProject = async (data: FieldValues) => {
    console.log(data);

    try {
      const res = await createProject(data);
      console.log("response", res);
      if (res?.data?.id) {
        toast.success("New project added successfully!");
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
            <Typography variant="h4" textAlign="center" fontWeight={700}>
              Add Project
            </Typography>
            {/* <Typography fontWeight={400}>Create your project</Typography> */}
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={7}>
          <Box>
            <PFForm
              onSubmit={handleCreateProject}
              defaultValues={{
                title: "",
                shortDescription: "",
                frontEndRepo: "",
                backEndRepo: "",
                liveLink: "",
                technologyUsed: "",
                photo: "",
              }}
            >
              <Grid container spacing={4} my={1}>
                {/* title */}
                <Grid item md={6}>
                  <PFInput name="title" fullWidth label="Title" size="small" />
                </Grid>
                {/* front repo */}
                <Grid item md={6}>
                  <PFInput
                    name="frontEndRepo"
                    fullWidth
                    label="GitHub Client Repo"
                    size="small"
                  />
                </Grid>
                {/* back repo */}
                <Grid item md={6}>
                  <PFInput
                    name="backEndRepo"
                    fullWidth
                    label="GitHub Server Repo"
                    size="small"
                  />
                </Grid>
                {/* live link */}
                <Grid item md={6}>
                  <PFInput
                    name="liveLink"
                    fullWidth
                    label="Deploy link"
                    size="small"
                  />
                </Grid>
                {/* image */}
                {/* <Grid item md={6}>
                  <PFImage name="images" />
                </Grid> */}
                <Grid item md={6}>
                  <PFInput
                    name="images"
                    fullWidth
                    label="Images"
                    size="small"
                  />
                </Grid>
                {/* technology */}
                <Grid item md={6}>
                  <PFInput
                    name="technologyUsed"
                    fullWidth
                    label="Technology"
                    size="small"
                  />
                </Grid>
                {/* description */}
                <Grid item md={12}>
                  <PFQuill name="shortDescription" />
                </Grid>
                {/* <Grid item md={12}>
                  <PFInput
                    name="shortDescription"
                    fullWidth
                    label="Description"
                    size="small"
                  />
                </Grid> */}
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
