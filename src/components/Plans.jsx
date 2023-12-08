import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { vip_card_plans } from "../utils/constant";

// const StyledText = styled(Box)(({ theme }) => ({
//   fontFamily: "Montserrat",
//   fontSize: "19px",
//   fontWeight: 500,
//   color: "#fff",
//   width: "100%",
//   display: "flex",
//   justifyContent: "center",
//   marginTop: "10px",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "16px",
//   },
// }));

const Plans = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "DM Sans",
          fontSize: { xs: "27px", md: "60px" },
          fontWeight: 700,
          textAlign: "center",
          mt: 5,
        }}
      >
        Binance Killers® VIP Plans
      </Typography>
      <Typography
        sx={{
          color: "#F43D23",
          fontFamily: "DM Sans",
          fontSize: { xs: "27px", md: "40px" },
          fontWeight: 700,
          textAlign: "center",
          my: 2,
        }}
      >
        LIMITED TIME SALE
      </Typography>
      <Box mt={4}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"flex-start"}
          spacing={2.4}
        >
          {vip_card_plans.map((item, id) => {
            return (
              <Grid item xs={12} md={3.4} key={id}>
                <Box
                  sx={{
                    borderRadius: { xs: "25px", md: "35px" },
                    border: "2px solid #646464",
                    background:
                      "var(--ggg, linear-gradient(121deg, #272727 14.82%, #383838 70.82%))",
                    py: 3,
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 4,

                    ":hover": {
                      borderRadius: { xs: "25px", md: "35px" },
                      border: "2.335px solid var(--Light-ag, #FF7C68)",
                      background:
                        "var(--ggg, linear-gradient(121deg, #272727 14.82%, #383838 70.82%))",
                      boxShadow:
                        "50.201px 50.201px 116.747px 0px rgba(0, 0, 0, 0.50), 0px 24.187px 107.961px 1.099px rgba(229, 61, 100, 0.20)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "18px", md: "24px" },
                        fontWeight: 700,
                        my: 2,
                      }}
                    >
                      {item.durations}
                    </Typography>
                    <Box display={"flex"} justifyContent={"center"}>
                      <img
                        src={item.img}
                        alt="plan-img-1"
                        style={{ width: "120px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#F43D23",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "20px", md: "27px" },
                        fontWeight: 700,
                      }}
                    >
                      <s>{item.discount}</s>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "22px", md: "32px" },
                        fontWeight: 700,
                        //   mb: 2,
                      }}
                    >
                      {item.price}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "12px", md: "20px" },
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {item.deal}
                    </Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Button
                      sx={{
                        color: "#FFF",
                        fontFamily: "Montserrat",
                        fontSize: "24px",
                        fontWeight: 700,
                        borderRadius: "30px",
                        background:
                          "var(--Light-ag, linear-gradient(180deg, #FF7C68 -4.05%, #E53D64 80.63%, #DA2363 122.28%))",
                        width: "190px",
                        height: "42px",
                      }}
                    >
                      Join Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Plans;
