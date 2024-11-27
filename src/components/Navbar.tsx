import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { TextField } from "@mui/material";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically perform the search logic,
    // e.g., send the search term to the backend or filter products on the frontend.
    // For now, we'll just log the search term and redirect to the products page.
    console.log("Searching for:", searchTerm);
    navigate(`/products?search=${searchTerm}`);
  };

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
          <form onSubmit={handleSearchSubmit} style={{ marginRight: "1rem" }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
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
