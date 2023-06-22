import styled from 'styled-components';

export const MainText = styled.p`
  font-family: ${p => p.theme.fonts.body};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.mainText};
`;

export const SubTitle = styled.h3`
  font-family: ${p => p.theme.fonts.body};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mml};
  line-height: 2;
  letter-spacing: 0.06em;

  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.mainText};
`;

export const MainTitle = styled.h2`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};

  letter-spacing: 0.06em;

  text-align: center;

  color: ${p => p.theme.colors.mainText};
`;

export const PhotoContainer = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;

  max-width: 775px;

  overflow: hidden;
  background-color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.md};
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// max-width: 70%;
export const Article = styled.article`
  margin-left: auto;
  margin-right: auto;

  max-width: 775px;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
`;

export const ListSTyled = styled.ul`
  list-style: inside;
  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;
