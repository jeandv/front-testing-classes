import { Box, Typography } from '@mui/material';

export default function DisplayFormValues({ isDirty, isValid, values }) {
  return (
    <Box color='grey.600' mt='10px'>
      {isDirty && !isValid && (
        <>
          <Typography> Username: {values.usernameWatch}</Typography>
          <Typography> Password: {values.passwordWatch}</Typography>
        </>
      )}
    </Box>
  );
}
