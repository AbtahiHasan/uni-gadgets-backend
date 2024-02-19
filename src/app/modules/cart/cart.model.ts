import { Schema, model } from 'mongoose';
import { ICart } from './cart.interface';

const ProductSchema = new Schema<ICart>(
  {
    email: { type: String },
    product_name: { type: String },
    product_image: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    product_quantity: { type: Number },
  },
  { timestamps: true },
);

const Product = model<ICart>('Cart', ProductSchema);
export default Product;
