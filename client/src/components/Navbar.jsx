import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import { Menu as MenuIcon, EventAvailable as EventIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Appointments", path: "/appointments" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "#1e293b", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <EventIcon /> EasyAppoint
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.text}
                component={Link}
                to={link.path}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0",
                    height: "2px",
                    bottom: "-2px",
                    left: "50%",
                    backgroundColor: "#f97316", 
                    transition: "all 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                    left: "0",
                  },
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                backgroundColor: "#14b8a6",
                color: "white",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#0d9488",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Login
            </Button>

            <Button
              component={Link}
              to="/signup"
              variant="contained"
              sx={{
                backgroundColor: "#f97316",
                color: "white",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#ea580c",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>

          <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={handleDrawerToggle} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton component={Link} to={link.path} onClick={handleDrawerToggle}>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login" onClick={handleDrawerToggle}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/signup" onClick={handleDrawerToggle}>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
