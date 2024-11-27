const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Sample user data (in a real app, store this in a database)
const users = [];

// Sample product data (replace with your actual data)
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 19.99,
    imageUrl: "https://via.placeholder.com/150",
    reviews: [
      { rating: 5, comment: "Great product!" },
      { rating: 4, comment: "Good value for money." },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/150",
    reviews: [
      { rating: 3, comment: "It's okay." },
      { rating: 5, comment: "I love it!" },
    ],
  },
  // Add more products here
];

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = users.find((user) => user.username === username);
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Failed to log in" });
  }
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
