import { CustomInput } from './CustomInput';

export const PasswordInput = ({ register, errors }) => {
  return (
    <CustomInput
      label='Password'
      register={register}
      errors={errors}
      name='password'
      type='password'
      maxLength={12}
    />
  );
};
