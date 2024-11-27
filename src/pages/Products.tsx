import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard'; 

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('/api/products'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}> 
            <ProductCard product={product} /> 
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
