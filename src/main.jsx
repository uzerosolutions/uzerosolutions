import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: { main: "#0f5a37", contrastText: "#ffffff" },
    secondary: { main: "#79c43f", contrastText: "#102b1d" },
    success: { main: "#1dce68" },
    text: { primary: "#203d2d", secondary: "#52637d" },
    background: { default: "#ffffff", paper: "#ffffff" },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    button: { fontWeight: 700, textTransform: "none" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: "none", fontWeight: 700 } },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 700 } },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
