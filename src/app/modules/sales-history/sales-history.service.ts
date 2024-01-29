import { ISalesHistory } from './sales-history.interface';
import SalesHistory from './sales-history.model';

const createSalesIntoDb = async (payload: ISalesHistory) => {
  return await SalesHistory.create(payload);
};
const SalesHistoryServices = { createSalesIntoDb };
export default SalesHistoryServices;
