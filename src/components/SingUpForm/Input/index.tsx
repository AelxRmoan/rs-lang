import React, { InputHTMLAttributes } from 'react';
import { TextField } from '@mui/material';
import css from './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <TextField
      className={css.input}
      id={id}
      label={placeholder}
      type={type}
      variant="outlined"
    />
  );
};
