import { body } from 'express-validator';
import user from '../model/user';

export const registerValidator = () => [
  body('email')
    .isEmail()
    .withMessage('Type email tidak valid')
    .custom(async (value) => {
      const existingUser = await user.findOne({ 'credential.email': value });
      if (existingUser) {
        throw 'Email Sudah Terdaftar';
      }
    }),
  body('password')
    .isString()
    .isLength({ min: 6, max: 20 })
    .withMessage('Password : Jumlah maximal 20 dan minimal 6 karakter'),
  body('fullname')
    .isString()
    .isLength({ min: 4, max: 28 })
    .withMessage('Fullname : Jumlah maximal 28 dan minimal 4 karakter')
];

export const verifyValidator = () => [
  body('email').isEmail().withMessage('Email : Type email tidak valid'),
  body('otp_number')
    .isNumeric()
    .withMessage('otp number : karakter bukan numeric')
    .isLength({ min: 6, max: 6 })
    .withMessage('jumlah karakter tidak valid')
];

export const sendValidator = () => [
  body('email').isEmail().withMessage('Jumlah minimal 6 karakter')
];

export const loginValidator = () => [
  body('email').isEmail().withMessage('Jumlah minimal 6 karakter'),
  body('password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Jumlah minimal 6 karakter')
];

export const forgotValidator = () => [
  body('new_password')
    .isString()
    .isLength({ min: 6, max: 20 })
    .withMessage('Jumlah minimal 6 karakter')
];

export const arrayValidator = (param: string) => [
  body(param).isArray().withMessage('data harus array')
];

export const notificationValidator = () => [body('notification_id').isString()];
