import { Box } from "@mui/material";
import Home from "./pages/Home";
import Carousel from "./components/common/Carousel";

export default function App() {
  return (
    <Box mx="4rem" my="3rem">
      <Home />
      <Carousel />
    </Box>
  );
}
