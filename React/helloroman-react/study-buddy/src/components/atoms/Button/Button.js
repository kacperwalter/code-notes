import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const alertMe = () => alert('Hello');

const Button = () => (
  <StyledButton onClick={alertMe}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
