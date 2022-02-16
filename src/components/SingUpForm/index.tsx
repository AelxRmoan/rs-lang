import React, { useState } from 'react';
import css from './styles.css';
import { Tabs, Tab } from '@mui/material';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { useForm, Controller } from 'react-hook-form';

enum TabsEnum {
  SignUp,
  LogIn,
}

interface Props {
  handleClose: () => void;
  onSucsessLogin: () => void;
}

export const SignUpForm: React.FC<Props> = ({ onSucsessLogin }) => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.LogIn);

  const handleTabs = (e: React.SyntheticEvent, val: TabsEnum) => {
    setCurrentTab(val);
  };

  return (
    <div className={css.form}>
      <div className={css.formWrapper}>
        <Tabs className={css.menu} value={currentTab} onChange={handleTabs}>
          <Tab className={css.tab} label="Sign Up" />
          <Tab className={css.tab} label="Log In" />
        </Tabs>
        {currentTab === TabsEnum.SignUp && <SignUp />}
        {currentTab === TabsEnum.LogIn && (
          <LogIn onSucsessLogin={onSucsessLogin} />
        )}
      </div>
    </div>
  );
};
