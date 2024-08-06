"use client";
import PFForm from "@/components/Form/PFForm";
import PFImage from "@/components/Form/PFImage";
import PFInput from "@/components/Form/PFInput";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import PFQuill from "@/components/Form/PFQuil";

const CreateBlog = () => {
  const handleCreateBlog = async (data: FieldValues) => {};

  return (
    <Box>
      <Box bgcolor={"#FDF8F7"}>
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Add your Blog
            </Typography>
            <Typography fontWeight={400}>
              Write your Blog and show your skill
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={7}>
          <Box>
            <PFForm onSubmit={handleCreateBlog}>
              <Grid container spacing={4} my={1}>
                <Grid item md={6}>
                  <PFInput name="title" fullWidth label="Title" size="small" />
                </Grid>

                <Grid item md={6}>
                  <PFImage name="photo" />
                </Grid>
                <Grid item md={12}>
                  <PFQuill name="content" />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
              >
                Add Blog
              </Button>
            </PFForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBlog;
