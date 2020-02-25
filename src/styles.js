import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  div {
    margin: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
