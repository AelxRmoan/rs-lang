import { Button as MuiButton } from '@mui/material';
import React from 'react';

interface Props {
  selector: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = ({children, selector, onClick}) => {
  return (
    <MuiButton variant="contained" className={`${selector}`} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
