import styled from 'styled-components';

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  min-width: ${p => p.theme.space[6] * 3}px;

  font-family: ${p => p.theme.fonts.body};

  @media screen and (min-width: 768px) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }
`;

export const FilterButton = styled.button`
  height: ${p => p.theme.space[4] * 3 + 2}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => p.theme.borders.none};
`;

export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  margin-bottom: ${p => p.theme.space[2]}px;
`;
