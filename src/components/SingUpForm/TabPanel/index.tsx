import React from 'react';

export const TabPanel = (props: any) => {
  const { children, value, index } = props;
  return <div>{value === index && children}</div>;
};
