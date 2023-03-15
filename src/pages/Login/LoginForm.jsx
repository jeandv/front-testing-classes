import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function LoginForm() {
  useForm({
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <form>
      <input type='text' name='' id='' />
      <input type='text' name='' id='' />
      <button></button>
    </form>
  );
}
