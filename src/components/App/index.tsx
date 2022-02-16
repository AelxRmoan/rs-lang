import css from './app.css';
import { StyledEngineProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { LandingPage } from '../LandingPage';
import { Savanna } from '../Savanna';
import Modal from '@mui/material/Modal';
import { SignUpForm } from '../SingUpForm';

export const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    } else {
      handleOpen();
    }
  };

  const onSucsessLogin = () => {
    handleClose();
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(!!token);
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);

  return (
    <StyledEngineProvider injectFirst>
      <Header onClick={onClick} isLoggedIn={isLoggedIn} />
      {/* <main className={css.main}>
        <LandingPage />
      </main> */}
      <Savanna />
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
    </StyledEngineProvider>
    // "62092712937fa9001658c769" userId
  );
};
