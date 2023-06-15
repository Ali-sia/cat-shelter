import styled from 'styled-components';

export const InnerContainer = styled.div`
  display: flex;
  margin-top: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.body};
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  width: 55%;

  font-size: ${p => p.theme.fontSizes.mml};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.mainText};

  & span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
export const PhotoContainer = styled.div`
  width: 45%;

  overflow: hidden;
  background-color: ${p => p.theme.colors.secondaryBackground};
  border-radius: ${p => p.theme.radii.md};
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Name = styled.h3`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: 2;
  letter-spacing: 0.06em;

  color: ${p => p.theme.colors.mainText};
`;
export const Gender = styled.p``;
export const Age = styled.p``;
export const Status = styled.p``;
export const Color = styled.p``;
export const Description = styled.p``;
export const Location = styled.p``;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};

  background-color: ${p => p.theme.colors.red};
  border-color: transparent;
  border-radius: ${p => p.theme.radii.md};
`;
