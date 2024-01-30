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
router.get('/get-sales-history', SalesHistoryControllers.getSalesHistory);

const SalesHistoryRoutes = router;
export default SalesHistoryRoutes;
