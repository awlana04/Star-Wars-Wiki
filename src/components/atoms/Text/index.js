import React from 'react';

import { TextContainer } from './styles';

export const Text = ({ children, ...props }) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};
