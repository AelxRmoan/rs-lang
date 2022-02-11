import React from 'react';
import { Main } from '../main/main';
import { SignUpForm } from '../SingUpForm';

export const App: React.FC = () => {
  return (
    <>
    <Main/>
      <div>App</div>
      <SignUpForm />
    </>
  );
};
