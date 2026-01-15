// theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1F3556" },
    secondary: { main: "#B79A5A" },
    background: {
      default: "#F2F2F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2B2B2B",
      secondary: "rgba(43,43,43,0.6)",
    },
    divider: "rgba(43,43,43,0.15)",
  },
  breakpoints: {
    values: {
      xs: 0, // mobile
      sm: 600, // tablets
      md: 900, // small laptops
      lg: 1200, // desktops
      xl: 1536,
    },
  },
});
 