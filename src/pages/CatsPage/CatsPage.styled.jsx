import styled from 'styled-components';

export const InnerContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 5;

  height: 100vh;
  overflow-y: auto;
  padding: 2rem;

  background-color: #fff3f2;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 3;
`;

export const StyledButton = styled.button`
  height: ${p => p.theme.space[4] * 3 + 2}px;
  width: 100%;
  margin-top: ${p => p.theme.space[4]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => p.theme.borders.none};
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;

  div {
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 10px;
  }
  div:before,
  div:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 4px;
    background-color: #212121;
  }
  div:before {
    transform: rotate(45deg);
  }
  div:after {
    transform: rotate(-45deg);
  }
`;
