import { Document } from 'mongoose';

export interface IProduct extends Document {
  author: string;
  name: string;
  price: number;
  product_image: string;
  quantity: number;
  releaseDate: Date;
  brand: string;
  modelNumber: string;
  category: string;
  operatingSystem?: string;
  connectivity?: string;
  powerSource?: string;
  features?: {
    cameraResolution?: number;
    storageCapacity?: number;
  };
}
