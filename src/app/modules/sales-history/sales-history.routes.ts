import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import SalesHistoryValidations from './sales-history.validation';
import SalesHistoryControllers from './sales-history.controller';

const router = Router();
router.post(
  '/create-sale',
  validateRequest(SalesHistoryValidations.createSaleValidationSchema),
  SalesHistoryControllers.createSales,
);

const SalesHistoryRoutes = router;
export default SalesHistoryRoutes;
