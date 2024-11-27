import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    // Load cart items from local storage or context API
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== productId
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`$${item.price.toFixed(2)}`}
              />
              <Button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </Button>
            </ListItem>
          ))}
          <ListItem>
            <ListItemText primary="Total" />
            <Typography variant="h6">
              ${calculateTotalPrice().toFixed(2)}
            </Typography>
          </ListItem>
          <ListItem>
            <Link to="/checkout">
              <Button variant="contained">Proceed to Checkout</Button>
            </Link>
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default Cart;
