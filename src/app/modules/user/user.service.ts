import User from './user.model';
import { Response } from 'express';

import { ILoginUser, IRegisterUser } from './user.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import sendToken from '../../utils/jwt';

const createUserIntoDb = async (payload: IRegisterUser, res: Response) => {
  const isUserExists = await User.findOne({ email: payload.email });
  if (isUserExists) {
    throw new AppError(httpStatus.CONFLICT, 'user already exists');
  }

  const user = await User.create(payload);

  sendToken(user, res, 'registration successfully');
};
const loginUser = async (payload: ILoginUser, res: Response) => {
  const isUserExists = await User.findOne({ email: payload.email }).select(
    '+password',
  );
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  const isPasswordMatch = await isUserExists.comparePassword(payload.password);

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.BAD_REQUEST, 'invalid credential');
  }

  sendToken(isUserExists, res, 'login successfully');
};

const changeOwnerRoleIntoDb = async (
  email: string,
  role: string,
  res: Response,
) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }
  await User.findOneAndUpdate({ email }, { $set: { role } }, { new: true });

  sendToken(user, res, 'role changed successfully');
};

const UserServices = { createUserIntoDb, loginUser, changeOwnerRoleIntoDb };

export default UserServices;
