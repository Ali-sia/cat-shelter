import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import bgi from '../../assets/images/heroBackground.jpg';
import bgix2 from '../../assets/images/heroBackground@2x.jpg';

export const Hero = styled.section`
min-height: 600px;
  background-color: ${p => p.theme.colors.mainBackground};
  background-image: url(${bgi});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:   background-image: url(${bgix2});
  }
`;

export const Title = styled.h1`
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.space[5] + 8}px;
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: ${p => p.theme.colors.logoText};
`;

export const Author = styled.p`
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.space[4]}px;
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.03em;
  text-align: end;

  color: ${p => p.theme.colors.secondaryText};
`;

export const StyledNavLink = styled(NavLink)`
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
`;

export const InnerDiv = styled.div`
  max-width: 625px;

  padding-top: ${p => p.theme.space[5] * 5}px;
`;
