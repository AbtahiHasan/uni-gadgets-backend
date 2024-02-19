/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import httpStatus from 'http-status';
// import AppError from '../../errors/AppError';
// import { generateQuery } from '../../utils/generateQuery';

import { ICart } from './cart.interface';
import Cart from './cart.model';

// import mongoose from 'mongoose';

const createCartIntoDb = async (payload: ICart, email: string) => {
  payload.email = email;
  const result = await Cart.create(payload);
  return result;
};
const getCartsFromDb = async (email: string) => {
  const result = await Cart.find({ email });
  return result;
};

const cartServices = { createCartIntoDb, getCartsFromDb };
export default cartServices;
