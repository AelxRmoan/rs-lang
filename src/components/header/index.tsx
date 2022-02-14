import css from './header.css';
import { Button } from '../Button';
import { useEffect, useRef, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SignUpForm } from '../SingUpForm';
import { flexbox } from '@mui/system';

enum TabsEnum {
  Welcome,
  WordList,
  Statistics,
  Games,
}

export const Header = () => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.Welcome);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTabs = (e: React.SyntheticEvent, val: TabsEnum) => {
    setCurrentTab(val);
  };

  return (
    <header className={css.header} id="header">
      <div className={css.header__flex} id="header__flex">
        <Tabs className={css.menu} value={currentTab} onChange={handleTabs}>
          <Tab className={css.tab} label="Welcome" />
          <Tab className={css.tab} label="Word List" />
          <Tab className={css.tab} label="Statistics" />
          <Tab className={css.tab} label="Games" />
        </Tabs>
      </div>
      <Button selector={css.btn} onClick={handleOpen}>
        Log in
      </Button>
      <Modal
        id="modal"
        className={css.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignUpForm handleClose={handleClose} />
      </Modal>
    </header>
  );
};
