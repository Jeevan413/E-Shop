import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

export default CartItem;
