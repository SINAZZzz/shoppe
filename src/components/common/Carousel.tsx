import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/images/carousel/Img1.png";

import "swiper/css";
import "swiper/css/pagination";

import "../../styles/carousel.css";

import { Pagination } from "swiper/modules";
import { Box } from "@mui/material";

export default function Carousel() {
  return (
    <Box my={2}>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={img1} alt="img1" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
