import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import UserServices from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'user registration successfully!',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  await UserServices.loginUser(req.body, res);
});

const UserController = { createUser, loginUser };

export default UserController;
