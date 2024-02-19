import { Schema, model } from 'mongoose';
import { ICart } from './cart.interface';

const ProductSchema = new Schema<ICart>(
  {
    email: { type: String },
    product_name: { type: String },
    product_image: { type: String },
    price: { type: Number },
    quantity: { type: Number, default: 1 },
    product_quantity: { type: Number },
  },
  { timestamps: true },
);

const Cart = model<ICart>('Cart', ProductSchema);
export default Cart;
