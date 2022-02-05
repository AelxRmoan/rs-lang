import { CssBaselineProps } from '@mui/material';
import { CSSObject } from '@mui/styled-engine-sc';
import React, { Children } from 'react';
import css from './styles.css';
import { Button } from '@mui/material';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonF: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button variant="contained" className={css.button}>
      {children}
    </Button>
  );
};
