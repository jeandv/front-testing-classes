import { Button } from '@mui/material';

export default function CustomButton({ isDirty, isValid, type, children }) {
  return (
    <Button
      fullWidth
      type={type}
      variant='contained'
      disabled={!isDirty | !isValid}
    >
      {children}
    </Button>
  );
}
