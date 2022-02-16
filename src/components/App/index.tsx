import css from './app.css';
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { Header } from '../Header';
import { LandingPage } from '../LandingPage';
import { SignUpForm } from '../SingUpForm';
import { Footer } from '../Footer';

export const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className={css.main}>
        <LandingPage />
      </main>
      <Footer/>
      <SignUpForm />
    </StyledEngineProvider>
  );
};
