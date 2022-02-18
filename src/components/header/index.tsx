import css from './header.css';
import { Button } from '../Button';
import { useEffect, useRef, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import { Link, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { LandingPage } from '../LandingPage';
import { WordBook } from '../WordBook';

enum TabsEnum {
  Welcome,
  WordBook,
  Statistics,
  Games,
}

interface Props {
  onClick: () => void;
  isLoggedIn: boolean;
}

export const Header: React.FC<Props> = ({ onClick, isLoggedIn }) => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.Welcome);
  const navigate = useNavigate();

  const handleTabs = (e: React.SyntheticEvent, val: TabsEnum) => {
    setCurrentTab(val);
    navigate(TabsEnum[val])
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.header__flex}>
          <Tabs className={css.menu} value={currentTab} onChange={handleTabs}>
            <Tab className={css.tab} label="Welcome"/>
            <Tab className={css.tab} label="Word Book"/>
            <Tab className={css.tab} label="Statistics"/>
            <Tab className={css.tab} label="Games"/>
          </Tabs>
        </div>
        <Button selector={css.btn} onClick={onClick}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </Button>
      </header>
    </>
  );
};
