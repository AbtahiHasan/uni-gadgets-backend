import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  brand: { type: String, required: true },
  modelNumber: { type: String, required: true },
  category: { type: String, required: true },
  operatingSystem: { type: String },
  connectivity: { type: [String] },
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
});

const Product = model<IProduct>('Product', ProductSchema);
export default Product;
