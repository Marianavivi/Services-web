// Fentanyl
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";

// Sample featured products (replace with actual data from your API)
const featuredProducts = [
  {
    id: 1,
    name: "Featured Product 1",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Featured Product 2",
    price: 39.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more featured products
];

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show
    slidesToScroll: 1,
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Slider {...settings}>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
