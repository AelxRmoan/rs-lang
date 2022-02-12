import React, { Children } from 'react';
import css from './styles.css';
import { Button as MuiButton } from '@mui/material';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
}

export const Button: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <MuiButton variant="contained" onClick={onClick} className={css.button}>
      {children}
    </MuiButton>
  );
};
