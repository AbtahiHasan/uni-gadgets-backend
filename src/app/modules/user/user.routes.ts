import { Router } from 'express';
import UserController from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import UserValidations from './user.validation';
import auth from '../../middlewares/auth';

const router = Router();

router.post(
  '/register-user',
  validateRequest(UserValidations.createUserValidationSchema),
  UserController.createUser,
);
router.post(
  '/login',
  validateRequest(UserValidations.loginValidationSchema),
  UserController.loginUser,
);
router.put(
  '/change-user-role',
  auth(),
  validateRequest(UserValidations.roleValidationSchema),
  UserController.changeOwnerRole,
);

const UserRoutes = router;
export default UserRoutes;
