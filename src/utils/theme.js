import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme1 = createTheme({
  palette: {
    background: {
      default: "#1E1E1E",
      color: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.60)",
    },
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: [
      "'Montserrat', sans-serif",
      "'Plus Jakarta Sans', sans-serif",
    ].join(","),
    h1: {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: 600,
      background:
        "var(--Light-ag, linear-gradient(180deg, #FF7C68 -4.05%, #E53D64 80.63%, #DA2363 122.28%))",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h2: {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: 500,
      color: "#FFF",
      fontSize: "24px",
    },
    h4: {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: 400,
      color: "#FFF",
      fontSize: "24px",
    },
    normalText: {
      color: "#A5A5A5",
      fontFamily: "Montserrat",
      fontSize: "17px",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "simplebtn" },
          style: {
            fontFamily: "Montserrat",
            fontSize: "22px",
            fontWeight: 400,
            color: "#fff",

            "&:hover": {
              color: "red",
            },
          },
        },
      ],
    },
  },
});
theme1.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#000",
        color: "#fff",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

const theme = responsiveFontSizes(theme1);

export default theme;
