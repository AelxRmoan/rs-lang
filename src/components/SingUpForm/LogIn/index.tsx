import React, { useState } from 'react';
import { Input } from '../Input';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../Button';
import { signIn } from '../../../api/users';
import { SignIn } from '../../../types';

interface Props {
  handleClose: () => void;
}

export const LogIn: React.FC<Props> = ({ handleClose }) => {
  const { control, handleSubmit } = useForm<SignIn>({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: any) => {
    await signIn(data);
    handleClose();
    // alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id={'email'}
        type={'email'}
        placeholder={'login *'}
        control={control}
        customErrors={{
          required: 'Required login',
        }}
      />
      <Input
        id={'password'}
        type={'password'}
        placeholder={'password *'}
        control={control}
        customErrors={{
          required: 'Required password',
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Enter</Button>
    </form>
  );
};
