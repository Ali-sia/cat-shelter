import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CatsContainer = styled.div``;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3] + 2}px ${p => p.theme.space[5] - 5}px;

  color: ${p => p.theme.colors.secondaryText};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.radii.sm};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.space[4] + 4}px;
  line-height: ${p => p.theme.lineHeights.body};

  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.white};
`;
