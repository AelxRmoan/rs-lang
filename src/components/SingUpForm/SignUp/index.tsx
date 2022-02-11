import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { createUser } from '../../../api/users';

export const SignUp = () => {
  const { control, handleSubmit, getValues } = useForm({ mode: 'onBlur' });

  const onSubmit = (data: any) => {
    createUser(data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id={'name'}
        type={'text'}
        placeholder={'имя *'}
        control={control}
        customErrors={{ required: 'Введите имя' }}
      />
      <Input
        id={'email'}
        type={'email'}
        placeholder={'логин *'}
        control={control}
        rules={{
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }}
        customErrors={{
          pattern: 'Неправильная почта',
          required: 'Введите почту',
        }}
      />
      <Input
        id={'password'}
        type={'password'}
        placeholder={'пароль *'}
        control={control}
        rules={{ maxLength: 20, minLength: 4 }}
        customErrors={{
          required: 'Введите пароль',
          maxLength: 'Максимальная длина пароля 20 символов',
          minLength: 'Минимальная длина пароля 4 символа',
        }}
      />
      <Input
        id={'passwordR'}
        type={'password'}
        placeholder={'повторите пароль *'}
        control={control}
        rules={{ validate: (value: string) => value === getValues('password') }}
        customErrors={{
          required: 'Введите пароль',
          validate: 'Пароль не совпадает',
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>
    </form>
  );
};
