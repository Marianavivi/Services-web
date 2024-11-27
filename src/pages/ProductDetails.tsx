import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Button } from "@mui/material";
import ProductReviews from "../components/ProductReviews";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  reviews: { rating: number; comment: string }[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  const handleAddToCart = () => {
    // Load existing cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    // Add the new product to the cart
    cartItems.push(product);

    // Store the updated cart in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Redirect to cart page
    navigate("/cart");
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {product.name}
      </Typography>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ maxWidth: "500px" }}
      />
      <Typography variant="h5" gutterBottom>
        ${product.price}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Button variant="contained" onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetails;
