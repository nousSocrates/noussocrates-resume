import { Box, Button, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: "900px",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Name */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          nousSocrates
        </Typography>

        {/* Role */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          Educator • Web Developer • Content Creator
        </Typography>

        {/* Value proposition */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            lineHeight: 1.7,
          }}
        >
          I design meaningful learning experiences through technology, music,
          and modern web development — blending education, creativity, and clean
          engineering.
        </Typography>

        {/* Call to Action */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "accent.main",
              px: 3,
              py: 1.2,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            href="#experience"
          >
            View Experience
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "secondary.main",
              color: "secondary.main",
              px: 3,
              py: 1.2,
              "&:hover": {
                borderColor: "secondary.dark",
                backgroundColor: "rgba(183,154,90,0.08)",
              },
            }}
            href="#contact"
          >
            Contact Me
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
