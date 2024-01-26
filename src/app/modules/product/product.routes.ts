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

/*
 * TODO
 * update product partially
 */

// router.put('/update-product/:productId', productControllers.createProduct);
router.get('/get-products', productControllers.getProducts);
router.get('/get-product/:productId', productControllers.getSingleProduct);
router.delete('/delete-product/:productId', productControllers.deleteProduct);
router.delete(
  '/delete-multiple-products',
  productControllers.deleteMultipleProducts,
);

const ProductRoutes = router;
export default ProductRoutes;
