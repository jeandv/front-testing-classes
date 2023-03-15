import * as yup from 'yup';

export const loginFormSchema = yup.object({
  username: yup.string().required('Username is required').max(12, 'Username cannot be longer than 12 characters'),
  password: yup.string().required('Password is required').max(12, 'Password cannot be longer than 12 characters').matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    'Password must be alphanumeric, and contain a maximum of 12 characters, a capital letter and a special character'
  ).required()
});