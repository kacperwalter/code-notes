import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.darkGrey};
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: lightgrey;
  }

  .textField {
    margin-left: 24px;
  }
  .nameField {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    margin-bottom: 1px;
  }
  .attendanceField {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
    margin-top: 0px;
  }
`;
