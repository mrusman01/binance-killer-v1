import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import ListToken from "./ListToken";

const HeroSection = () => {
  return (
    <Box>
      <ListToken />
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.60)",
            fontFamily: "DM Sans",
            fontSize: { xs: "17px", md: "24px" },
            fontWeight: 700,
            mt: { xs: 6, md: 8 },
          }}
        >
          Welcome to the family.
        </Typography>
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            textShadow: "0px 4px 20px rgba(0, 0, 0, 0.50)",
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "35px", md: "80px" },
            fontWeight: 700,
            mt: "5px",
            lineHeight: "normal",
          }}
        >
          Binance Futures and Spot Crypto Trading Signals
        </Typography>
        <Typography
          sx={{
            color: "#A5A5A5",
            textAlign: "center",
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "15px", md: "24px" },
            fontWeight: 600,
            my: 3,
          }}
        >
          Crypto, the worlds fastest growing market… Why? <br /> BECAUSE IT HAS
          MADE A FORTUNE FOR THOSE WHO KNOW HOW TO USE IT <br /> We’re here to
          guide you from scratch if you’re a beginner, and perfect your skills
          if you’re a professional trader. Join the most accurate and profitable
          trading community in the world today.
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            sx={{
              borderRadius: "91px",
              background:
                "linear-gradient(180deg, #FF7C68 -4.05%, #E53D64 111.52%, #DA2363 168.36%)",
              color: "#fff",
              fontFamily: "DM Sans",
              fontSize: { xs: "15px", md: "30px" },
              fontStyle: "normal",
              fontWeight: 700,
              width: { xs: "330px", md: "600px" },
              height: { xs: "45px", md: "60px" },
              mt: 3,
              mb: 4,
            }}
          >
            Join Free Telegram Channel
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
