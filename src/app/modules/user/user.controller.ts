import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import UserServices from './user.service';

const createUser = catchAsync(async (req, res) => {
  await UserServices.createUserIntoDb(req.body, res);
});
const loginUser = catchAsync(async (req, res) => {
  await UserServices.loginUser(req.body, res);
});
const changeOwnerRole = catchAsync(async (req, res) => {
  await UserServices.changeOwnerRoleIntoDb(
    req.user?.email,
    req.body?.role,
    res,
  );
});

const UserController = { createUser, loginUser, changeOwnerRole };

export default UserController;
