import { Box, Typography, Grid } from "@mui/material";
import product1 from "../../assets/images/product/product1.png";
import product2 from "../../assets/images/product/product2.png";
import product3 from "../../assets/images/product/product3.png";
import product4 from "../../assets/images/product/product4.png";
import product5 from "../../assets/images/product/product5.png";
import product6 from "../../assets/images/product/product6.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function ProductList() {
  const data = [
    {
      id: 1,
      title: "Lira Earrings",
      price: "$ 20,00",
      image: product1,
    },
    {
      id: 2,
      title: "Hal Earrings",
      price: "$ 25,00",
      image: product2,
    },
    {
      id: 3,
      title: "Kaede Hair Pin Set Of 3 ",
      price: "$ 30,00",
      image: product3,
    },
    {
      id: 4,
      title: "Hair Pin Set of 3",
      price: "$ 35,00",
      image: product4,
    },
    {
      id: 5,
      title: "Plaine Necklace",
      price: "$ 40,00",
      image: product5,
    },
    {
      id: 6,
      title: "Yuki Hair Pin Set of 3",
      price: "$ 45,00",
      image: product6,
    },
  ];

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={6}
      >
        <Typography variant="h5">Shop The Latest</Typography>
        <Typography variant="body1" color="#A18A68" sx={{ cursor: "pointer" }}>
          View All
        </Typography>
      </Box>
      {/* cart */}
      <Grid container columnSpacing={10} rowSpacing={5}>
        {data.map((item) => (
          <Grid item xs={4}>
            <Box>
              <Box position="relative" overflow="hidden">
                <Box
                  component="img"
                  src={item.image}
                  alt="cart"
                  width={"100%"}
                  sx={{
                    "&:hover": {
                      opacity: 0.5,
                    },
                  }}
                />
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  sx={{
                    backgroundColor: "#FFFFFF60",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Box display="flex" gap={2}>
                    <ShoppingCartOutlinedIcon sx={{ cursor: "pointer" }} />
                    <RemoveRedEyeOutlinedIcon sx={{ cursor: "pointer" }} />
                    <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
              </Box>
              <Typography variant="body1" my={2}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="#A18A68">
                {item.price}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
