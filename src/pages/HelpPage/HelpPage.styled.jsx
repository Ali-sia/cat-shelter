import styled from 'styled-components';

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${p => p.theme.space[4]}px;
`;

export const ImageContainer = styled.div`
  max-width: 800px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.02em;
`;
export const Link = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.02em;
`;

export const StyledNavLink = styled.h3`
  padding: ${p => p.theme.space[3] + 2}px ${p => p.theme.space[5] - 5}px;

  color: ${p => p.theme.colors.secondaryText};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.radii.sm};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.space[4] + 4}px;
  line-height: ${p => p.theme.lineHeights.body};

  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.white};

  display: flex;
  justify-content: center;
`;
