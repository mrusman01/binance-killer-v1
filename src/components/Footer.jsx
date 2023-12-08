import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import logo from "../assets/logo.png";
import sendIcon from "../assets/sendIcon.png";
import liveIcon from "../assets/liveIcon.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";

const StyledBtn = styled(Box)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "17px",
  color: "#F7F7F7",
  textAlign: "flex-start",
  textTransform: "capitalize",
  alignItems: "center",
  display: "flex",
  height: "45px",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },

  "&:hover": {
    color: "#fff",
    cursor: "pointer",
  },
}));
const StyledBtn2 = styled(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "15px",
  color: "#808080",
  textTransform: "capitalize",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  "&:hover": {
    color: "#fff",
    cursor: "pointer",
  },
}));
const Footer = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{ mt: 4 }}>
      <Box bgcolor={"#212121"} height={"2px"} sx={{ mx: { xs: 1, md: 10 } }} />
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          mt={{ xs: "10px", md: "30px" }}
          spacing={3}
        >
          <Grid item xs={12} md={2}>
            <Stack
              direction={"column"}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <StyledBtn>Home</StyledBtn>
              <StyledBtn>
                News
                {matches && (
                  <img src={liveIcon} alt="" style={{ width: "50px" }} />
                )}
              </StyledBtn>
              <StyledBtn>Proof</StyledBtn>
              <StyledBtn>Coins</StyledBtn>
              <StyledBtn sx={{ color: "#fff", mt: 1 }}>
                Privacy Policy
              </StyledBtn>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              direction={"column"}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <StyledBtn2 sx={{ marginLeft: "-10px" }}>
                Your investments are your responsibility
              </StyledBtn2>
              <StyledBtn>
                Send your CV
                <img src={sendIcon} alt="" style={{ width: "35px" }} />{" "}
              </StyledBtn>

              <StyledBtn sx={{ color: "#fff", mt: { xs: 0, md: 13 } }}>
                Terms of Service
              </StyledBtn>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack direction={"column"} alignItems={"center"}>
              <Box display="flex" alignItems="center" gap={1}>
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: matches ? "37px" : "30px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "19px", md: "22px" },
                    fontWeight: 700,
                  }}
                >
                  Binance Killers
                </Typography>
              </Box>
              <StyledBtn2>Headquarters</StyledBtn2>
              <StyledBtn2 sx={{ margin: "7px 0px" }}>
                New York / SIngapore
              </StyledBtn2>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  mt: 3,
                }}
              >
                <img
                  src={telegram}
                  alt=""
                  style={{
                    width: matches ? "37px" : "25px",
                  }}
                />
                <img
                  src={twitter}
                  alt=""
                  style={{
                    width: matches ? "37px" : "25px",
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box
        bgcolor={"#212121"}
        height={"2px"}
        sx={{ mx: { xs: 1, md: 10 }, mt: 5 }}
      />
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            // py: { xs: "10px", md: "5px" },
            gap: { xs: "10px", md: "0px" },
            my: 1,
          }}
        >
          <Typography
            sx={{
              color: "#6F6F6F",
              fontFamily: "Montserrat",
              fontSize: "13px",
            }}
          >
            ©2024 ― Binance Killers® Trading
          </Typography>
          {matches && (
            <Box
              bgcolor={"#212121"}
              height={"90px"}
              width={"2px"}
              sx={{ mx: { xs: 1, md: 10 }, mt: 2 }}
            />
          )}
          <Typography
            sx={{
              color: "#6F6F6F",
              fontFamily: "Montserrat",
              fontSize: "13px",
            }}
          >
            TERMS & CONDITIONS•PRIVACY POLICY
          </Typography>
        </Box>
      </Container>
      <Box
        bgcolor={"#212121"}
        height={"2px"}
        sx={{ mx: { xs: 1, md: 10 }, mt: 2 }}
      />
    </Box>
  );
};

export default Footer;
