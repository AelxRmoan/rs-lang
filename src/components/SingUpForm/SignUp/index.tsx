import React from 'react';
import { Input } from '../Input';

export const SignUp = () => {
  return (
    <div>
      <Input id={'name'} type={'text'} placeholder={'name *'} />
      <Input id={'login'} type={'text'} placeholder={'login *'} />
      <Input id={'password'} type={'password'} placeholder={'password *'} />
      <Input
        id={'passwordR'}
        type={'password'}
        placeholder={'repeat password *'}
      />
    </div>
  );
};
