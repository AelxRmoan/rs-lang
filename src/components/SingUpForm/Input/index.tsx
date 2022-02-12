import React, { InputHTMLAttributes, useState } from 'react';
import { TextField } from '@mui/material';
import css from './styles.css';
import { Controller, Control, Path } from 'react-hook-form';

interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: Path<T>;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  control: Control<T>;
  rules?: {};
  customErrors?: {};
}

const defultErrors = { required: 'required!' };

export const Input = <T,>({
  id,
  type,
  placeholder,
  error,
  helperText,
  value,
  onChange,
  control,
  rules,
  customErrors,
}: InputProps<T>) => {
  return (
    <Controller
      render={({ field, fieldState }) => {
        const errorType = fieldState?.error?.type ?? '';
        const errors = { ...defultErrors, ...customErrors };
        const errorText =
          errorType in errors ? errors[errorType as keyof typeof errors] : '';
        return (
          <TextField
            {...field}
            autoComplete="off"
            className={css.input}
            label={placeholder}
            type={type}
            variant="outlined"
            error={fieldState.invalid}
            helperText={errorText}
          />
        );
      }}
      name={id}
      control={control}
      rules={{ required: true, ...rules }}
    />
  );
};
