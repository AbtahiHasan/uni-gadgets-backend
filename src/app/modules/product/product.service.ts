/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateQuery } from '../../utils/generateQuery';
import { IProduct } from './product.interface';
import Product from './product.model';

const createProductIntoDb = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getProductsFromDb = async (query: any) => {
  const filter = generateQuery(query);
  const result = await Product.find(filter);
  return result;
};
const getSingleProductFromDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};
const deleteProductFromDb = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

const productServices = {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDb,
  deleteProductFromDb,
};
export default productServices;
