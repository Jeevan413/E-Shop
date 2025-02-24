import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String, // You can also use `type: mongoose.Schema.Types.ObjectId` if categories are stored in a separate collection
    required: true,
    enum: ["electronics", "clothing", "furniture", "books", "others"], // Optional: restrict allowed categories
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
