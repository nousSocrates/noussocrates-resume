import { Box, Stack, Typography } from "@mui/material";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        backgroundColor: "primary.main",
        color: "accent.main",
      }}
    >
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ px: 2 }}>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          © {year} nousSocrates. All rights reserved.
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Educator • Web Developer • Content Creator
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Typography
            component="a"
            href="#experience"
            sx={{
              color: "secondary.main",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Experience
          </Typography>

          <Typography
            component="a"
            href="#projects"
            sx={{
              color: "secondary.main",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Projects
          </Typography>

          <Typography
            component="a"
            href="#contact"
            sx={{
              color: "secondary.main",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Contact
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
