import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import EmailIcon from "@mui/icons-material/Email";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

import { StyledInput } from "./CutomComponents";
import { cryptoNewsArray } from "../utils/constant";

const NewsAccordian = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const [arrow, setArrow] = useState(false);
  const iconsBtn = () => {
    setArrow(!arrow);
  };
  return (
    <Container maxWidth="lg">
      {cryptoNewsArray.map((item, i) => {
        return (
          <Accordion
            key={i}
            sx={{
              bgcolor: "transparent",
              mt: "4px",
              boxShadow: "none",
              "&.MuiPaper-elevation": {
                boxShadow: "none !important",
                border: "none !important",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: "#fff", mt: !arrow ? 2 : 0, mb: arrow ? 3 : 0 }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                display: "flex",
                alignItems: "flex-start",
              }}
              onClick={iconsBtn}
            >
              <Stack width={"100%"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={{ xs: 3, md: 7 }}
                >
                  <Typography
                    variant="normalText"
                    fontSize={{ xs: "13px", md: "17px" }}
                  >
                    {item.time}
                  </Typography>
                  <Typography
                    color="#fff"
                    variant="h2"
                    fontSize={{ xs: "13px", md: "22px" }}
                    textAlign={"left"}
                  >
                    {item.question}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mt={1.5}
                >
                  <Typography
                    variant="normalText"
                    fontSize={{ xs: "13px", md: "17px" }}
                  >
                    ago
                  </Typography>
                  <Box
                    width="92%"
                    display="flex"
                    alignItems={"center"}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                  >
                    <Stack
                      direction={"row"}
                      alignItems="center"
                      spacing={{ xs: 1, md: 3.5 }}
                    >
                      <FavoriteBorderIcon />
                      <Typography
                        variant="normalText"
                        fontSize={{ xs: "9px", md: "15px" }}
                      >
                        14
                      </Typography>
                      <ArrowUpwardIcon />
                      <Typography
                        variant="normalText"
                        fontSize={{ xs: "9px", md: "15px" }}
                      >
                        2
                      </Typography>
                      <HorizontalRuleIcon />
                      <ArrowDownwardIcon />
                      <EmailIcon />
                      <RestoreFromTrashIcon />
                    </Stack>
                    {matches && (
                      <Typography
                        variant="normalText"
                        sx={{
                          textAlign: "center",
                          width: "20%",
                          fontSize: { xs: "13px", md: "17px" },
                        }}
                      >
                        {item.author}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h2"
                fontSize={{ xs: "13px", md: "24px" }}
                textAlign={"left"}
              >
                The Kaspa price skyrocketed by another 26% in the last 24 hours
                and is trading at $0.133 as of 8:30 a.m. ET ahead of the [...]
              </Typography>
              <StyledInput />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default NewsAccordian;
