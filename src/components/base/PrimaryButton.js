import styled from 'styled-components';
import { space } from 'styled-system'

const PrimaryButton = styled.button`
  border-radius: 4px;
  min-width: 78px;
  height: ${props => props.high ? "50px" : "37px"} ;
  background-color: var(--turquoiseBlue);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
  border: none;
  outline: none;
  transition: all 0.2s;
  ${space};
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active,
  &:focus {
    box-shadow: 0 0 1px 2px rgba(97, 218, 251, 0.3);
  }
`;

export default PrimaryButton;
