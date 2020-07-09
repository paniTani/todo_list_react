import styled from 'styled-components';
import { space } from 'styled-system'

const PrimaryInput = styled.input`
  border-radius: 4px;
  border: 1px solid var(--turquoiseBlue);
  min-width: 300px;
  height: ${props => props.high ? "50px" : "37px"} ;
  background-color: transparent;
  color: var(--lightBlack);
  font-size: 16px;
  font-weight: 500;
  padding: 0 15px;
  transition: all 0.2s;
  outline: none;
  ${space};
  
  &:active,
  &:focus {
    box-shadow: 0 0 1px 2px rgba(97, 218, 251, 0.3);
  }
`;

export default PrimaryInput;
