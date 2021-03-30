import styled from 'styled-components';

const colorSwitcher = (avgValue, theme) => {
  if (avgValue < 3) {
    return theme.colors.error;
  } else if (avgValue > 3 && avgValue < 4.5) {
    return theme.colors.warning;
  } else {
    return theme.colors.success;
  }
};

export const StyledAverage = styled.div`
  color: ${({ avgValue, theme }) => colorSwitcher(avgValue, theme)};
`;
