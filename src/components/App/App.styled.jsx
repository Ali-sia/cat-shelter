import styled from 'styled-components';

export const ContainerWidth = styled.div`
  max-width: 1170px;
  width: 100%;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  margin-left: auto;
  margin-right: auto;
`;
