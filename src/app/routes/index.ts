/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import ProductRoutes from '../modules/product/product.routes';
type TRoute = {
  path: string;
  route: any;
};
const router = Router();

const moduleRoutes: TRoute[] = [{ path: '/products', route: ProductRoutes }];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
