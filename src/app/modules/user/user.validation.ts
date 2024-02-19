import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  }),
});
const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});
const roleValidationSchema = z.object({
  body: z.object({
    role: z.enum(['user', 'manager']),
  }),
});

const UserValidations = {
  createUserValidationSchema,
  loginValidationSchema,
  roleValidationSchema,
};
export default UserValidations;
