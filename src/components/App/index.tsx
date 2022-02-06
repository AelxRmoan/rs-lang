import React from 'react';
import { SignUpForm } from '../SingUpForm';
import { Header } from '../Header/header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <SignUpForm />
    </>
  );
};
