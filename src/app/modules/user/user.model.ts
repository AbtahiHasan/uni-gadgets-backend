import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import config from './../../config';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, 'password must be at least 6 characters'],
      select: false,
    },
  },
  { timestamps: true },
);

userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(
    this.password,
    parseInt(config.bcrypt_salt_rounds || '10'),
  );
  next();
});

userSchema.methods.comparePassword = async function (
  enteredPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

const User = model<IUser>('User', userSchema);

export default User;
