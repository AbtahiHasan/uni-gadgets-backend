import { Router } from 'express';
import cartControllers from './cart.controller';

import validateRequest from '../../middlewares/validateRequest';

import auth from '../../middlewares/auth';
import cartValidations from './cart.validation';

const router = Router();

router.post(
  '/crate-cart',
  auth(),
  validateRequest(cartValidations.createCartValidationSchema),
  cartControllers.createCart,
);

const CartRoutes = router;
export default CartRoutes;
