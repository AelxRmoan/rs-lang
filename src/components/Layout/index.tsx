<<<<<<< HEAD
import css from './layout.css'
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
=======
import css from './layout.css';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../Header';
>>>>>>> 6f193659e20392517171cd49e247f8d0e51f5da2
import Modal from '@mui/material/Modal';
import { SignUpForm } from '../SingUpForm';
import { Footer } from '../Footer';

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      window.location.reload();
    } else {
      handleOpen();
    }
  };

  const onSucsessLogin = () => {
    handleClose();
    setIsLoggedIn(true);
<<<<<<< HEAD
    window.location.reload();
=======

    const fromPage = location.pathname || '/';
    navigate(fromPage);
>>>>>>> 6f193659e20392517171cd49e247f8d0e51f5da2
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);
  return (
    <>
      <Header onClick={onClick} isLoggedIn={isLoggedIn} />
      <main className={css.main}>
<<<<<<< HEAD
        <Outlet/>
=======
        <Outlet />
>>>>>>> 6f193659e20392517171cd49e247f8d0e51f5da2
      </main>
      <Footer/>
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
  );
};
