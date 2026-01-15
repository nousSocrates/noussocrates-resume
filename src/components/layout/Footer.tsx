import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        textAlign: "center",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} nousSocrates. All rights reserved.
      </Typography>
    </Box>
  );
}
