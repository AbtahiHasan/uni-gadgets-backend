/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import ProductRoutes from '../modules/product/product.routes';
import UserRoutes from '../modules/user/user.routes';
import SalesHistoryRoutes from '../modules/sales-history/sales-history.routes';
import CartRoutes from '../modules/cart/cart.routes';
type TRoute = {
  path: string;
  route: any;
};
const router = Router();

const moduleRoutes: TRoute[] = [
  { path: '/products', route: ProductRoutes },
  { path: '/auth', route: UserRoutes },
  { path: '/sales', route: SalesHistoryRoutes },
  { path: '/cart', route: CartRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
