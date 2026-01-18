import { createTheme } from "@mui/material/styles";

export const nousSocratesTheme = createTheme({
  palette: {
    primary: {
      main: "#1F3556",
    },
    secondary: {
      main: "#B79A5A",
    },
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

  typography: {
    fontFamily: `"Inter", "Roboto", "Arial", sans-serif`,
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    /* 🔘 BUTTON BEHAVIOR */
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          color: "#FFFFFF",
        },
      },
    },

    /* 🔗 LINK BEHAVIOR */
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#1F3556",
          fontWeight: 500,
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
            color: "#B79A5A",
          },
        },
      },
    },

    /* 🧭 FOCUS & CLICK FEEDBACK */
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "#1F3556",
          cursor: "pointer",
        },
        "*:focus-visible": {
          outline: "2px solid #B79A5A",
          outlineOffset: "2px",
        },
      },
    },
  },
});
