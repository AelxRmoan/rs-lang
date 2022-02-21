import css from './layout.css'
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
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
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);
  return (
    <>
      <Header onClick={onClick} isLoggedIn={isLoggedIn} />
      <main className={css.main}>
        <Outlet/>
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
