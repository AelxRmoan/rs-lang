import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { SignUpForm } from '../SingUpForm';

export const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div>App</div>
      <SignUpForm />
    </StyledEngineProvider>
  );
};
