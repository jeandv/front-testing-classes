import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import { loginFormSchema } from './schemas/login-form-schema';
import { CustomInput, CustomButton } from '../../components';

export default function LoginForm() {
  const {
    register, // registra los inputs con las propiedades del formulario
    handleSubmit, // hace el submit del form
    watch, // si modificamos algun valor del form, ese valor se guardara y cada vez q se cambia se podrá usar
    formState: { errors, isDirty, isValid }, // mostramos los errores, si es valido, etc
    reset, // hace reset al form
  } = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
  });

  const usernameWatch = watch('username');
  const passwordWatch = watch('password');

  return (
    <>
      {usernameWatch}
      {passwordWatch}

      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit()}>
          <CustomInput name='username' label='Username' required={true} />
          <CustomInput name='password' label='Contraseña' required={true} />
          <CustomButton isDirty={isDirty} isValid={isValid}>
            Iniciar Sesión
          </CustomButton>
        </form>
      </FormProvider>

      <Box color='grey.600' mt='10px'>
        {isDirty && !isValid && (
          <>
            <Typography> Username: {usernameWatch}</Typography>
            <Typography> Password: {passwordWatch}</Typography>
          </>
        )}
      </Box>
    </>
  );
}
