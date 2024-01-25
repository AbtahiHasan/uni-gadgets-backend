import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import productServices from './product.service';
const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProductIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'product created successfully!',
    data: result,
  });
});

const productControllers = { createProduct };
export default productControllers;
