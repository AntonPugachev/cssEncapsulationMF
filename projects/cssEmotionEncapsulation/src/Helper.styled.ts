
import styled from '@emotion/styled';

interface IFlexContainerProps{
    'ai'?:string;
    'jc'?:string;
}
const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props:IFlexContainerProps) => props.ai || 'stretch'};
  justify-content: ${(props:IFlexContainerProps) => props.jc || 'flex-start'};
`;
export default FlexContainer;
