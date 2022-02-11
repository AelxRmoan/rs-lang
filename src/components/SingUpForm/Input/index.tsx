import React, { InputHTMLAttributes, useState } from 'react';
import { TextField } from '@mui/material';
import css from './styles.css';
import { Controller, Control } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  control: Control;
  rules?: {};
  customErrors?: {};
}

const defultErrors = {
  required: 'required!',
  max: 'Max length 12!',
};

export const Input: React.FC<InputProps> = ({
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
}) => {
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
