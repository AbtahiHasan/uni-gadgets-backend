import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import productServices from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProductIntoDb(
    req.body,
    req.user?.email,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'product created successfully!',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const result = await productServices.updateProductIntoDb(
    req?.params?.productId,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'product updated successfully!',
    data: result,
  });
});
const getProducts = catchAsync(async (req, res) => {
  const result = await productServices.getProductsFromDb(req?.query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'products retrieved successfully!',
    data: result,
  });
});
const getMyProducts = catchAsync(async (req, res) => {
  const result = await productServices.getMyProductsFromDb(
    req?.query,
    req.user?.email,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'products retrieved successfully!',
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const result = await productServices.getSingleProductFromDb(
    req?.params?.productId,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'product retrieved successfully!',
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const result = await productServices.deleteProductFromDb(
    req?.params?.productId,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'product deleted successfully!',
    data: result,
  });
});
const deleteMultipleProducts = catchAsync(async (req, res) => {
  const result = await productServices.deleteMultipleProductsFromDb(
    req?.body?.ids,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'product deleted successfully!',
    data: result,
  });
});

const productControllers = {
  createProduct,
  updateProduct,
  getProducts,
  getMyProducts,
  getSingleProduct,
  deleteProduct,
  deleteMultipleProducts,
};
export default productControllers;
