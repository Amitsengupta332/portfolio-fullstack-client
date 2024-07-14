import HeroSection from "@/components/UI/HeroSection/HeroSection";
import { Button, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack direction={"column"} spacing={8}>
      <HeroSection />
    </Stack>
  );
};

export default HomePage;
