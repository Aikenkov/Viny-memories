import styled from 'styled-components';

export default function Input({ value = '', onChange = () => 0, ...props }) {
  return <StyledInputField {...props} value={value} onChange={onChange} placeholder={props.placeholder} />;
}

const StyledInputField = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  margin-top: 10px;
  border-bottom: 1px solid #333333;
  outline: none;

  ::placeholder {
    color: #333333;
    font-size: 15px;
  }
`;
