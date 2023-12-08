import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import tick from "../assets/tick.png";
import { resultArray, vip_points } from "../utils/constant";

const VipPoints = () => {
  return (
    <Box sx={{ mt: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 10 } }}>
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "DM Sans",
            fontSize: { xs: "27px", md: "60px" },
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          What does Binance Killers® <br /> VIP include?
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            mt: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {vip_points.map((item, i) => {
            return (
              <Grid item xs={12} md={6} key={i}>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <img src={tick} alt="tick" style={{ width: "30px" }} />
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "15px", md: "20px" },
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            borderRadius: "30px",
            border: "2px solid #646464",
            background:
              "var(--ggg, linear-gradient(121deg, #272727 14.82%, #383838 70.82%))",
            boxShadow: "43px 43px 100px 0px rgba(0, 0, 0, 0.50)",
            py: 5,
            px: 5,
            mt: 9,
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: { xs: "24px", md: "41px" },
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Results Don’t Lie
          </Typography>
          <Typography
            sx={{
              color: "#A5A5A5",
              fontFamily: "Montserrat",
              fontSize: { xs: "17px", md: "24px" },
              fontWeight: 500,
              textAlign: "center",
              mt: 1,
              mb: 2,
            }}
          >
            At Binance Killers®, we’re always aiming <br /> the highest, and
            that’s why we’re the best.
          </Typography>

          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            spacing={{ xs: 5, md: 6 }}
            mb={1.1}
          >
            {resultArray.map((item, i) => {
              return (
                <Grid item xs={12} md={4} key={i}>
                  <Box textAlign={"center"}>
                    <Typography
                      sx={{
                        background:
                          "var(--Light-ag, linear-gradient(180deg, #FF7C68 -4.05%, #E53D64 80.63%, #DA2363 122.28%))",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: { xs: "27px", md: "41px" },
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A5A5A5",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "15px", md: "17px" },
                        fontWeight: 700,
                      }}
                    >
                      {item.duration}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Montserrat",
            fontSize: { xs: "17px", md: "40px" },
            textAlign: "center",
            mt: 8,
          }}
        >
          Questions? Feel free to ask <u>t.me/bkceo</u>
        </Typography>
      </Container>
    </Box>
  );
};

export default VipPoints;
