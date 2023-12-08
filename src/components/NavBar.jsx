import React from "react";
import {
  Container,
  Box,
  Button,
  Hidden,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";

import logo from "../assets/logo.png";
import TemporaryDrawer from "./Drawer";
import { NavLink } from "react-router-dom";
import { navBarBtn } from "../utils/constant";

const StyledBtn = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "22px",
  fontWeight: 400,
  // color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },

  "&:hover": {
    color: "red",
  },
}));
const NavBar = () => {
  const matches = useMediaQuery("(min-width:900px)");

  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "red " : "#fff",
    };
  };

  return (
    <Box
      sx={{
        py: { xs: 1, md: 2 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            px: { xs: 0, md: 7 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Box display="flex" alignItems="center" width={"330px"}>
              <img
                src={logo}
                alt="logo"
                style={{ width: matches ? "55px" : "20px" }}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "16px", md: "33px" },
                  fontWeight: 700,
                }}
              >
                Binance Killers
              </Typography>
            </Box>
          </NavLink>
          <Hidden mdDown>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "730px",
              }}
            >
              {navBarBtn.map((item, i) => {
                return (
                  <NavLink key={i} to={item.link} style={styledactivelink}>
                    <StyledBtn>{item.name}</StyledBtn>
                  </NavLink>
                );
              })}
              <Button
                sx={{
                  borderRadius: "15px",
                  border: "3px solid #FF7C68",
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: 700,
                  width: "197px",
                  height: "60px",
                }}
              >
                JOIN BK® VIP
              </Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            {/* <MenuIcon sx={{ color: "#fff" }} /> */}
            <TemporaryDrawer />
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
