import { CssBaselineProps } from '@mui/material';
import { CSSObject } from '@mui/styled-engine-sc';
import React, { Children } from 'react';
import css from './styles.css';
import { Button as MuiButton } from '@mui/material';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <MuiButton variant="contained" onClick={onClick} className={css.button}>
      {children}
    </MuiButton>
  );
};
