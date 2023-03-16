import * as yup from 'yup';

export const loginFormSchema = yup.object({
  username: yup.string().required('Username is required').max(12, 'Cannot be longer than 12 characters'),
  password: yup.string().required('Password is required').max(12, 'Cannot be longer than 12 characters').matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    'A capital letter, special character and must be alphanumeric'
  ).required()
});