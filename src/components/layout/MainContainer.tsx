import { Container } from "@mui/material";
import { type ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      {children}
    </Container>
  );
}
