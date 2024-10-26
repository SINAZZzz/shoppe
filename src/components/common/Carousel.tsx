import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/images/carousel/Img1.png";

import "swiper/css";
import "swiper/css/pagination";

import "../../styles/carousel.css";

import { Pagination } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";

export default function Carousel() {
  return (
    <Box my={2}>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              textAlign: "left",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              pl: 7,
            }}
          >
            <Typography variant="h4">Gold big hoops</Typography>
            <Typography variant="h5">$ 68,00</Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                width: "70%",
                fontWeight: "700",
                fontSize: "16px",
                color: "white",
                border: "2px solid white",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              View Product
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              textAlign: "left",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              pl: 7,
            }}
          >
            <Typography variant="h4">Gold big hoops</Typography>
            <Typography variant="h5">$ 68,00</Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                width: "70%",
                fontWeight: "700",
                fontSize: "16px",
                color: "white",
                border: "2px solid white",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              View Product
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              textAlign: "left",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              pl: 7,
            }}
          >
            <Typography variant="h4">Gold big hoops</Typography>
            <Typography variant="h5">$ 68,00</Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                width: "70%",
                fontWeight: "700",
                fontSize: "16px",
                color: "white",
                border: "2px solid white",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              View Product
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              textAlign: "left",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              pl: 7,
            }}
          >
            <Typography variant="h4">Gold big hoops</Typography>
            <Typography variant="h5">$ 68,00</Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                width: "70%",
                fontWeight: "700",
                fontSize: "16px",
                color: "white",
                border: "2px solid white",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              View Product
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
