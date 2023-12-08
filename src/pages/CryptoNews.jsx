import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import cryptoBg from "../assets/cryptoNewsBg.png";
import NewsAccordian from "../components/NewsAccordian";

const CryptoNews = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 10 } }}>
        <Typography
          variant="h1"
          sx={{
            mt: 9,
            fontSize: { xs: "32px", md: "44px" },
          }}
        >
          CRYPTO NEWS
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "22px", md: "29px" },
            my: 3.3,
          }}
        >
          NFTs Are Mooning Again – NFT Sales Jump 40% In The Past 7 Days
        </Typography>

        <Box my={5}>
          <Grid container spacing={3} justifyContent={"space-between"}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontSize={{ xs: "15px", md: "22px" }}>
                Kaspa Price Prediction: KAS Soars Another 26% As Traders Flock
                To This Bitcoin Alternative With Time Running Out
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontSize={{ xs: "15px", md: "22px" }}>
                Yearn.Finance Price Prediction: YFI Surges 29%, But This Crypto
                Casino Presale With 100X Potential Is About To Close
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <NewsAccordian />
    </Box>
  );
};

export default CryptoNews;
