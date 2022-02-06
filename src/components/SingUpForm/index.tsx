import React, { useState } from 'react';
import css from './styles.css';
import { Button as MuiButton } from './MuiButton';
import { Tabs, Tab } from '@mui/material';
import { TabPanel } from './TabPanel';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

enum TabsEnum {
  SignUp,
  LogIn,
}

export const SignUpForm = () => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.LogIn);

  const handleTabs = (e: React.SyntheticEvent, val: number) => {
    setCurrentTab(val);
  };

  return (
    <div className={css.form}>
      <div className={css.formWrapper}>
        <Tabs className={css.menu} value={currentTab} onChange={handleTabs}>
          <Tab className={css.tab} label="Sing Up" />
          <Tab className={css.tab} label="Log In" />
        </Tabs>
        {currentTab === TabsEnum.SignUp && <SignUp />}
        {currentTab === TabsEnum.LogIn && <LogIn />}
        <MuiButton onClick={() => {}}>Get started</MuiButton>
      </div>
    </div>
  );
};
