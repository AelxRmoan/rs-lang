import React, { useState } from 'react';
import css from './styles.css';
import { MuiButton } from './MuiButton';
import { Input } from './Input';
import { LogMenu } from './LogMenu';

export const SignUpForm = () => {
  return (
    <div className={css.form}>
      <div className={css.formWrapper}>
        <LogMenu />
        <MuiButton onClick={() => {}}>Get started</MuiButton>
      </div>
    </div>
  );
};
