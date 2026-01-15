import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { navItems } from "./navigation";

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "primary.main",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Brand */}
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: 600,
            color: "secondary.main",
          }}
        >
          nousSocrates
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box component="nav" sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: "accent.main",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <>
            <IconButton
              edge="end"
              onClick={toggleDrawer}
              aria-label="open navigation menu"
              sx={{ color: "secondary.main" }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 250,
                  backgroundColor: "background.default",
                  height: "100%",
                }}
                role="navigation"
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        component="a"
                        href={item.href}
                        onClick={toggleDrawer}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
