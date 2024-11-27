import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button } from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string; // Add description field
  price: number;
  imageUrl: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {product.name}
      </Typography>
      <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '500px' }} />
      <Typography variant="h5" gutterBottom>
        ${product.price}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Button variant="contained">Add to Cart</Button>
    </div>
  );
};

export default ProductDetails;
