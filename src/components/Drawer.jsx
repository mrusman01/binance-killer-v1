import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import { navBarBtn } from "../utils/constant";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        color: "#fff",
        fontFamily: "Poppins",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#000",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ fontFamily: "Montserrat" }}>
        {navBarBtn.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <NavLink to={item.link}>
                <Button
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "17px",
                    color: "#fff",
                    textAlign: "center",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button onClick={toggleDrawer(anchor, true)}>
              {<MenuIcon sx={{ color: "#fff", fontSize: "2rem" }} />}
            </Button>
          </Box>

          <SwipeableDrawer
            sx={{
              ".css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
                backgroundColor: "#000",
              },
              fontFamily: "Montserrat",
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Drawer;
