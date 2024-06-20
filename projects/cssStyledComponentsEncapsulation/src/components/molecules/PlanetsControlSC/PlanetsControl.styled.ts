import FlexContainer from '../../../Helper.styled';
import styled, { css } from 'styled-components';


const PlanetsControl = styled(FlexContainer)`
  gap: 32px;
  margin-top: 32px;
  padding: 0 16px;
`;

const PlanetsButton = styled.button( ({ theme: { color } }) => css`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color:${color.basic.primary};
  cursor: pointer;
  transition: 0.15s ease-in all;
  white-space: nowrap;
  font-size: 16px;
  user-select: none;
  height: 40px;
  width: 120px;
  color: white;
  &[disabled]{
    background-color:${color.basic.secondary};
    cursor: default;
  }
`);
export default {
  PlanetsControl,
  PlanetsButton
};
