import { Router } from 'express';
import productControllers from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import productValidations from './product.validation';

const router = Router();

router.post(
  '/create-product',
  validateRequest(productValidations.createProductValidationSchema),
  productControllers.createProduct,
);

const ProductRoutes = router;
export default ProductRoutes;
