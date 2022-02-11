import React, { useState } from 'react';
import { Input } from '../Input';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../Button';
import { signIn } from '../../../api/users';

export const LogIn = () => {
  const { control, handleSubmit } = useForm({ mode: 'onBlur' });

  const onSubmit = (data: any) => {
    signIn(data);
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id={'email'}
        type={'email'}
        placeholder={'логин *'}
        control={control}
        customErrors={{
          required: 'Введите логин',
        }}
      />
      <Input
        id={'password'}
        type={'password'}
        placeholder={'пароль *'}
        control={control}
        customErrors={{
          required: 'Введите пароль',
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Войти</Button>
    </form>
  );
};
