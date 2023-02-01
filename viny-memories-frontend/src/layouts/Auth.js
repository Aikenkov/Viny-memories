import styled from 'styled-components';
import vinylImage from '../assets/vinysig.jpg';

import { FormConteiner } from '../components/Auth';

export default function AuthLayout({ children }) {
  return (
    <Page>
      <Wrapper>
        <FormConteiner>{children}</FormConteiner>
        <img src={vinylImage} alt="vinyl" />
      </Wrapper>
    </Page>
  );
}
const Wrapper = styled.div`
  height: 700px;
  max-width: 800px;
  display: flex;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;

  img {
    height: 100%;
    width: 50%;
    object-fit: cover;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;
