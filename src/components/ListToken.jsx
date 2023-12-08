import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { tokenNameList } from "../utils/constant";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const ListToken = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        border: "1px solid #646464",
        background:
          "var(--ggg, linear-gradient(121deg, #272727 14.82%, #383838 70.82%))",
        boxShadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.30)",
        p: "8px",
      }}
    >
      <Box display="flex" alignItems="center" gap={3} width={"100%"}>
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={matches ? 6 : 2}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {tokenNameList.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={{ xs: "2px", md: "5px" }}
                  height={{ xs: "39px", md: "41px" }}
                  // border="2px solid red"
                  // width={"230px"}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: matches ? "143px" : "110px" }}
                  />
                  <Typography
                    sx={{
                      color: i % 2 === 0 ? "#0F6" : "red",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "11px", md: "17px" },
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {item.percent}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ListToken;
