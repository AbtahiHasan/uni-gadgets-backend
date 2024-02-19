// import catchAsync from '../../utils/catchAsync';
// import sendResponse from '../../utils/sendResponse';
// import httpStatus from 'http-status';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import cartServices from './cart.service';

const createCart = catchAsync(async (req, res) => {
  const result = await cartServices.createCartIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'cart created successfully!',
    data: result,
  });
});

const cartControllers = { createCart };
export default cartControllers;
