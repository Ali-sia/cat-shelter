import styled from 'styled-components';

export const List = styled.ul`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1200px) {
  }
`;
// width: 100%;
