import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import SalesHistoryServices from './sales-history.service';

const createSales = catchAsync(async (req, res) => {
  const result = await SalesHistoryServices.createSalesIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Sales created successfully',
    data: result,
  });
});

const SalesHistoryControllers = { createSales };
export default SalesHistoryControllers;
