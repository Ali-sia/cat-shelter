import styled from 'styled-components';

export const FilterName = styled.h3`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.02em;

  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const Label = styled.label`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.02em;

  margin-bottom: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[2]}px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;
