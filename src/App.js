import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import CryptoNews from "./pages/CryptoNews";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import bg from "./assets/heroBg.png";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%  100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pb: 3,
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptoNews" element={<CryptoNews />} />
      </Routes>{" "}
      <Footer />
    </Box>
  );
}

export default App;
