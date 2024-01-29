import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String },
    price: { type: Number },
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
      screenSize: { type: Number },
    },
    weight: { type: Number },
    dimensions: {
      height: { type: Number },
      width: { type: Number },
      depth: { type: Number },
    },
  },
  { timestamps: true },
);

const Product = model<IProduct>('Product', ProductSchema);
export default Product;
