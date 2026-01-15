import { Box } from "@mui/material";
import {type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";


interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      <Header />

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
