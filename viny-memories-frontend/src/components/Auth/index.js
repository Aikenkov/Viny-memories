import styled from 'styled-components';

export const FormConteiner = styled.div`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 30px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 700;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: var(--heavy-text);
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: var(--heavy-text);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
