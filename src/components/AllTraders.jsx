import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { all_tradersName } from "../utils/constant";

const AllTraders = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{ my: { xs: 8, md: 11 } }}>
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
          All Trades are compatible with
        </Typography>
        <Box
          sx={{
            borderRadius: "30px",
            border: "2px solid #646464",
            background:
              "var(--ggg, linear-gradient(121deg, #272727 14.82%, #383838 70.82%))",
            boxShadow: "43px 43px 100px 0px rgba(0, 0, 0, 0.50)",
            px: { xs: 1, md: 3 },
            py: { xs: 3, md: 5 },
            my: 2,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={{ xs: 2, md: 3 }}
          >
            {all_tradersName.map((item, i) => {
              return (
                <Box key={i}>
                  <Box>
                    <img
                      src={item}
                      alt=""
                      style={{ width: matches ? "220px" : "170px" }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AllTraders;
