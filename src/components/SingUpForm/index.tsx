import React from 'react';
import css from './styles.css';
import { ButtonF } from './Button';
import { Input } from './Input';

export const SignUpForm = () => {
  return (
    <div className={css.form}>
      <div className={css.formWrapper}>
        <div className={css.buttonWrapper}>
          <ButtonF onClick={() => {}}>Sing Up</ButtonF>
          <ButtonF onClick={() => {}}>Log In</ButtonF>
        </div>
        <Input id={'name'} type={'text'} placeholder={'name *'} />
        <Input id={'login'} type={'text'} placeholder={'login *'} />
        <Input id={'password'} type={'password'} placeholder={'password *'} />
        <Input
          id={'passwordR'}
          type={'password'}
          placeholder={'repeat password *'}
        />
        <ButtonF onClick={() => {}}>Get started</ButtonF>
      </div>
    </div>
  );
};
