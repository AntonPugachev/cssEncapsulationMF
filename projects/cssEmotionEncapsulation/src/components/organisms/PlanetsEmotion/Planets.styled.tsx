
import FlexContainer from '../../../Helper.styled';
import styled from '@emotion/styled';


const PlanetsRow = styled(FlexContainer)`
  border-bottom: 1px solid #efefef;
`;

const PlanetsCol = styled(FlexContainer)(({ theme: { color } }) => `
  width: 33.3%;
  padding: 8px 16px;
  border-right: 1px solid #efefef;
  color:${color.basic.font};
  &:last-of-type {
    border-right: 0;
  }
`);

const PlanetsColHeading = styled(PlanetsCol)`
  font-weight: 600;
`;


export default {
  PlanetsRow,
  PlanetsCol,
  PlanetsColHeading
};
