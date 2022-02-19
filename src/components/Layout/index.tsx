import css from './layout.css'
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import Modal from '@mui/material/Modal';
import { SignUpForm } from '../SingUpForm';


export const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);

      const fromPage = location.pathname || '/';
      navigate(fromPage);
    } else {
      handleOpen();
    }
  };

  const onSucsessLogin = () => {
    handleClose();
    setIsLoggedIn(true);
    
    const fromPage = location.pathname || '/';
    navigate(fromPage);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(!!token);
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);
  return (
    <>
      <Header onClick={onClick} isLoggedIn={isLoggedIn} />
      <main className={css.main}>
            <Outlet/>
      </main>
      <Modal
      id="modal"
      className={css.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <SignUpForm handleClose={handleClose} onSucsessLogin={onSucsessLogin} />
      </Modal>
    </>
  )
}
