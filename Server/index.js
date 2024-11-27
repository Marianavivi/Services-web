const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // You can choose any available port

app.use(cors());
app.use(bodyParser.json());

// Sample product data (replace with your actual data)
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more products here
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
