import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100Vh" }}> {children}</Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
