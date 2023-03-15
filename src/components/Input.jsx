import { Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const formValidationShowError = (errors, errorKey) =>
  errors[errorKey] ? (
    <Typography color='red'>{errors[errorKey].message}</Typography>
  ) : (
    ''
  );

export const Input = ({
  name = '',
  label = '',
  type = 'text',
  disabled = false,
  required = false,
}) => {
  const { register, errors } = useFormContext();

  return (
    <div>
      <TextField
        required={required}
        disabled={disabled}
        type={type}
        error={errors && !!errors(name)}
        label={label}
        variant='outlined'
        {...register(name)}
        fullWidth
      />
      {errors && formValidationShowError(errors, name)}
    </div>
  );
};
