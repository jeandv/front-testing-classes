import { TextField, Typography } from '@mui/material';

const formValidationShowError = (errors, errorKey) =>
  errors[errorKey] ? (
    <Typography color='red'>{errors[errorKey].message}</Typography>
  ) : (
    ''
  );

export function CustomInput({
  register,
  name = '',
  errors,
  label = '',
  type = 'text',
  disabled = false,
  trigger,
}) {
  return (
    <div>
      <TextField
        required
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        variant='outlined'
        {...register(name)}
        {...(trigger ? { onChange: () => trigger && trigger() } : {})}
        fullWidth
      />
      {errors && formValidationShowError(errors, name)}
    </div>
  );
}
