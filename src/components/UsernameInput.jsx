import { CustomInput } from './CustomInput';

export const UsernameInput = ({ register, errors }) => {
  return (
    <CustomInput
      label='Username'
      register={register}
      errors={errors}
      name='username'
      type='text'
      maxLength={12}
    />
  );
};
