import css from './layout.css'
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";


export const Layout = () => {
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
    <>
      <Header onClick={onClick} isLoggedIn={isLoggedIn} />
      <main className={css.main}>
            <Outlet/>
      </main>
      {/* <main className={css.main}>
          <Outlet/>
      </main> */}
      {/* <Modal
      id="modal"
      className={css.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <SignUpForm handleClose={handleClose} onSucsessLogin={onSucsessLogin} />
      </Modal> */}
    </>
  )

}
