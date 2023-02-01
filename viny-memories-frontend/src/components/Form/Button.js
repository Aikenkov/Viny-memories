import styled from 'styled-components';

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin-top: 30px;
  background-color: #333333;
  color: #f3f3f3;
  font-size: 15px;
  width: 100%;
  border-radius: 10px;
  height: 30px;
  border: none;
  cursor: pointer;
`;
