import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import SalesHistoryValidations from './sales-history.validation';
import SalesHistoryControllers from './sales-history.controller';
import auth from '../../middlewares/auth';

const router = Router();
router.post(
  '/create-sale',

  auth(),
  validateRequest(SalesHistoryValidations.createSaleValidationSchema),
  SalesHistoryControllers.createSales,
);
router.get(
  '/get-sales-history',
  auth(),
  SalesHistoryControllers.getSalesHistory,
);

const SalesHistoryRoutes = router;
export default SalesHistoryRoutes;
