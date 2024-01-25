import { IProduct } from './product.interface';
import Product from './product.model';

const createProductIntoDb = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const productServices = { createProductIntoDb };
export default productServices;
