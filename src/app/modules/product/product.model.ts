import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>(
  {
    author: { type: String },
    name: { type: String },
    price: { type: Number },
    product_image: { type: String },
    quantity: { type: Number },
    releaseDate: { type: Date },
    brand: { type: String },
    modelNumber: { type: String },
    category: { type: String },
    operatingSystem: { type: String },
    connectivity: { type: String },
    powerSource: { type: String },
    features: {
      cameraResolution: { type: Number },
      storageCapacity: { type: Number },
    },
  },
  { timestamps: true },
);

const Product = model<IProduct>('Product', ProductSchema);
export default Product;
