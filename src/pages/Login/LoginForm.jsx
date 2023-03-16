import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './schemas/login-form-schema';
import { callEndpoint } from './services/call-endpoint';
import { CustomButton, PasswordInput, UsernameInput } from '../../components';

export default function LoginForm() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const {
    register, // registra los inputs con las propiedades del formulario
    handleSubmit, // hace el submit del form
    // watch, si modificamos algun valor del form, ese valor se guardara y cada vez q se cambia se podrá usar
    formState: { errors, isDirty, isValid }, // mostramos los errores, si es valido, etc
    reset, // hace reset al form
  } = useForm({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(loginFormSchema),
    mode: 'all',
  });

  const onSubmit = async (data) => {
    // const result = await callEndpoint(data);

    // console.log(result);

    setValues({ ...data });

    reset();
  };

  return (
    <Box
      sx={{
        bgcolor: 'grey.300',
        borderRadius: '5px',
        p: '50px',
        width: '50%',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <UsernameInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <CustomButton type='submit' isDirty={isDirty} isValid={isValid}>
            Login
          </CustomButton>
        </Box>
      </form>

      <Box color='grey.600' mt='10px'>
        {values.username && values.password && (
          <>
            <Typography>Username: {values.username}</Typography>
            <Typography>Password: {values.password}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
