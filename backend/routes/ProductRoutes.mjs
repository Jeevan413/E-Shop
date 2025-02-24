import express from 'express';
import Product from '../models/Product.mjs';
import CartItem  from '../models/CartItem.mjs'; // Make sure to add the .js extension
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const cartItems = await CartItem.find(); // Get category from query params
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

// Add a product
router.post("/", async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    // Validate input
    if (!name || !price || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save new item
    const newItem = new CartItem({ name, price, quantity });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Failed to create product", error: error.message });
  }
});

router.put("/increase/:id", async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (item) {
      item.quantity += 1;
      await item.save();
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error increasing quantity" });
  }
});

router.put("/decrease/:id", async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      await item.save();
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found or quantity too low" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error decreasing quantity" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await CartItem.findByIdAndDelete(req.params.id);
    if (item) {
      res.json({ message: "Item removed" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing item" });
  }
});

export default router;
