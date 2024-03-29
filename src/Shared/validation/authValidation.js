import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .nullable()
    .required('Required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Must be at least one lowercase and uppercase letter, one number'
    ),
  confirmPassword: Yup.string()
    .nullable()
    .when('password', (password, schema) => {
      return password
        ? schema.required('Password confirmation required')
              .oneOf([Yup.ref('password')], 'Passwords must match')
        : schema.notRequired();
    })
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .nullable()
    .required('Required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one lowercase letter, one uppercase letter, and one digit'
    ),
});