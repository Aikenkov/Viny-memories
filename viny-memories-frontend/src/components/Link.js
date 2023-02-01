import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  text-decoration: none;
  color: var(--heavy-text);
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;
