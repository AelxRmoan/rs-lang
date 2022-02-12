import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { SignUpForm } from '../SingUpForm';
import { Header } from '../header/header';

export const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />        
      <SignUpForm />
    </StyledEngineProvider>
  );
};
