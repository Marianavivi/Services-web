import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Online Store
          </Typography>
          <div>
            <Link to="/register">
              <Button color="inherit">Register</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/cart">
              <Button color="inherit">Cart</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
