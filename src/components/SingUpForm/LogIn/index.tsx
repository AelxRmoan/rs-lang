import React from 'react';
import { Input } from '../Input';

export const LogIn = () => {
  return (
    <div>
      <Input id={'login'} type={'text'} placeholder={'login *'} />
      <Input id={'password'} type={'password'} placeholder={'password *'} />
    </div>
  );
};
