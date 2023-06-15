import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  font-family: ${p => p.theme.fonts.body};

  max-width: 450px;
  max-height: 450px;

  padding: ${p => p.theme.space[2]}px;

  @media screen and (min-width: 768px) {
    ${() => ` width: calc((100% - 1 * 20px) / 2);`}

    margin-bottom: ${p => p.theme.space[4] + 4}px;
  }
  @media screen and (min-width: 1200px) {
    ${() => ` width: calc((100% - 2 * 20px) / 3);`}

    &:not(:nth-child(3n)) {
      margin-right: ${p => p.theme.space[4] + 4}px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    &:nth-child(odd) {
      margin-right: ${p => p.theme.space[4] + 4}px;
    }
    &:last-child {
      margin-right: auto;
    }
  }

  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;

    margin-bottom: ${p => p.theme.space[4]}px;
  }

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.cardBorder};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;

  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const InfoCard = styled.div`
  position: relative;
  text-align: center;
`;
export const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;

  margin-right: auto;
  margin-left: auto;

  overflow: hidden;
  background-color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.round};
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const LinkToCat = styled(NavLink)``;
export const Name = styled.h3`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: 2;
  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.mainText};
`;
export const Gender = styled.p`
  font-size: ${p => p.theme.fontSizes.mml};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.mainText};
  & span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
export const Age = styled.p`
  font-size: ${p => p.theme.fontSizes.mml};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.mainText};
  & span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
export const Status = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 20px;
  height: 20px;

  padding: ${p => p.theme.space[2]}px;

  background-color: ${p =>
    p.$domesticated ? p.theme.colors.green : p.theme.colors.red};
  border-radius: ${p => p.theme.radii.round};
`;
