import { Box } from "@mui/material";
import Carousel from "../components/common/Carousel";
import Head from "../components/common/Head";
import ProductList from "../components/common/ProductList";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <Box>
      <Head />
      <Carousel />
      <ProductList />
      <Footer />
    </Box>
  );
}
