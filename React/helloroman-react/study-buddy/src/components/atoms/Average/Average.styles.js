import styled from 'styled-components';

// TODO
// I can use ternary operator here somehow
const colorSwitcher = (avgValue, theme) => {
  if (avgValue < 3) return theme.colors.error;
  if (avgValue > 3 && avgValue < 4.5) return theme.colors.warning;
  if (avgValue >= 4.5) return theme.colors.success;
};

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${({ avgValue, theme }) => colorSwitcher(avgValue, theme)};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
`;
