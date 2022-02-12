import css from './header.css'
import { Button } from '../Button/button';
import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

enum TabsEnum {
  Welcome,
  WordList,
  Statistics,
  Games
}

export const Header = () => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.Welcome);

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
      <Button selector={css.btn}>Log in</Button>
    </header>
  )
};
