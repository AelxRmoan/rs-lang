import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { createUser } from '../../../api/users';

export const SignUp = () => {
  const { control, handleSubmit, getValues } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    createUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id={'name'}
        type={'text'}
        placeholder={'name *'}
        control={control}
        customErrors={{ required: 'Required name' }}
      />
      <Input
        id={'email'}
        type={'email'}
        placeholder={'login *'}
        control={control}
        rules={{
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }}
        customErrors={{
          pattern: 'Incorrect email',
          required: 'Required email',
        }}
      />
      <Input
        id={'password'}
        type={'password'}
        placeholder={'password *'}
        control={control}
        rules={{ maxLength: 20, minLength: 4 }}
        customErrors={{
          required: 'Required password',
          maxLength: 'Max passowrd length 20 symbols',
          minLength: 'Min passowrd length 4 symbols',
        }}
      />
      <Input
        id={'passwordR'}
        type={'password'}
        placeholder={'repeat password *'}
        control={control}
        rules={{ validate: (value: string) => value === getValues('password') }}
        customErrors={{
          required: 'Required password',
          validate: 'Password does not match',
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Registration</Button>
    </form>
  );
};
