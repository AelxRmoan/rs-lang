import css from './button.css'
import { Button as MuiButton } from '@mui/material';

interface Props {
  selector: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = ({children, selector, onClick}) => {
  return (
    <MuiButton variant="contained" className={`${css.btn} ${selector}`} onClick={onClick}>
      {children}
    </MuiButton>
  );
};