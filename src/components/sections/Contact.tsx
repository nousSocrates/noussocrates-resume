import { Box, Link, Button, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box component="section" id="contact">
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        Contact
      </Typography>

      {/* Intro Text */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: "700px",
          color: "text.secondary",
        }}
      >
        I am open to professional engagements, collaborations, training
        opportunities, and educational projects. Feel free to reach out through
        any of the channels below.
      </Typography>

      {/* Contact Details */}
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Typography variant="body2">
          <strong>Email:</strong>{" "}
          <Link href="mailto:info@socratescreativity.com">
            info@socratescreativity.com
          </Link>
        </Typography>

        <Typography variant="body2">
          <strong>Phone:</strong> +254 704 588 581
        </Typography>

        <Typography variant="body2">
          <strong>Location:</strong> Kenya
        </Typography>
      </Stack>

      {/* Action Buttons */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            px: 3,
          }}
          href="mailto:info@noussocrates.com"
        >
          Send Email
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "secondary.main",
            color: "secondary.main",
            px: 3,
          }}
          href="#projects"
        >
          View Projects
        </Button>
      </Stack>
    </Box>
  );
}
