import React from 'react';

import { InputContainer, InputText } from './styles';

export const Input = props => {
  return (
    <InputContainer {...props}>
      <InputText {...props} />
    </InputContainer>
  );
};
