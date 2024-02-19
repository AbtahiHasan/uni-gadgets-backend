/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import httpStatus from 'http-status';
// import AppError from '../../errors/AppError';
// import { generateQuery } from '../../utils/generateQuery';

import { ICart } from './cart.interface';
import Cart from './cart.model';

// import mongoose from 'mongoose';

const createCartIntoDb = async (payload: ICart) => {
  const result = await Cart.create(payload);
  return result;
};

const cartServices = { createCartIntoDb };
export default cartServices;
