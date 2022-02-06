import React, { useState } from 'react';
import { Tabs, Tab, AppBar } from '@mui/material';
import { Input } from '../Input';
import css from './styles.css';
import { LogIn } from '../LogIn';
import { SignUp } from '../SignUp';

export const LogMenu = () => {
  const [value, setValue] = useState(0);

  const TabPanel = (props: any) => {
    const { children, value, index } = props;
    return <div>{value === index && children}</div>;
  };

  const handleTabs = (e: React.SyntheticEvent, val: number) => {
    setValue(val);
  };
  return (
    <>
      <Tabs className={css.menu} value={value} onChange={handleTabs}>
        <Tab className={css.tab} label="Sing Up" />
        <Tab className={css.tab} label="Log In" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignUp />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogIn />
      </TabPanel>
    </>
  );
};
