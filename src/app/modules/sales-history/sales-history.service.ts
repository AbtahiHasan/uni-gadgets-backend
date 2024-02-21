/* eslint-disable @typescript-eslint/no-explicit-any */

import Product from '../product/product.model';

import SalesHistory from './sales-history.model';
import Cart from '../cart/cart.model';

const createSalesIntoDb = async (payload: any) => {
  await Promise.all(
    payload.productIds.map(async (productId: string) => {
      const product = await Product.findById(productId);
      const carts = await Cart.find({ email: payload.userEmail });

      if (product) {
        const cart: any = carts.find(
          (item: any) => item.product_id === productId,
        );
        if (cart) {
          const updatedQuantity = product.quantity - cart.quantity;
          if (updatedQuantity <= 0) {
            await Product.findByIdAndDelete(productId);
          } else {
            await Product.findByIdAndUpdate(productId, {
              $set: { quantity: updatedQuantity },
            });
          }
        }
      }
    }),
  );

  const deleteCartPromise = payload.cartIds.map((cartId: string) => {
    return Cart.findByIdAndDelete(cartId);
  });

  await Promise.all(deleteCartPromise);

  // payload.productIds.map(async (productId: string) => {
  //   const product = await Product.findById(productId);
  //   const carts = await Cart.find({ email: payload.userEmail });

  //   if (product) {
  //     const cart: any = carts.find((item) => item.product_id === productId);
  //     if (cart) {
  //       const updatedQuantity = product.quantity - cart.quantity;
  //       if (updatedQuantity <= 0) {
  //         await Product.findByIdAndDelete(productId);
  //       } else {
  //         await Product.findByIdAndUpdate(productId, {
  //           $set: { quantity: updatedQuantity },
  //         });
  //       }
  //     }
  //   }
  // });

  // const deleteCartPromise = payload.cartIds.map((cartId: string) => {
  //   return Cart.findByIdAndDelete(cartId);
  // });

  // await Promise.all(deleteCartPromise);

  return await SalesHistory.create(payload);
};
const getSalesHistoryFromDB = async (query: Record<string, string>) => {
  const { filter } = query;
  console.log({ filter });
  let filterQuery: any = {};

  if (filter === 'week') {
    filterQuery = {
      buyDate: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        $lt: new Date(),
      },
    };
  } else if (filter === 'day') {
    filterQuery = {
      buyDate: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 1)),
        $lt: new Date(),
      },
    };
  } else if (filter === 'month') {
    filterQuery = {
      buyDate: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        $lt: new Date(),
      },
    };
  } else if (filter === 'year') {
    filterQuery = {
      buyDate: {
        $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        $lt: new Date(),
      },
    };
  }

  const salesData = await SalesHistory.find({ ...filterQuery });
  return salesData;
};
const SalesHistoryServices = { createSalesIntoDb, getSalesHistoryFromDB };
export default SalesHistoryServices;
