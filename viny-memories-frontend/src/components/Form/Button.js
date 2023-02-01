import styled from 'styled-components';

export default function Button({ children, ...props }) {
  return (
    <StyledButton disabled={props.disabled} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  margin-top: 30px;
  background-color: var(--main-color);
  color: var(--main-text);
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  border-radius: 10px;
  height: 30px;
  border: none;
  cursor: pointer;
`;
