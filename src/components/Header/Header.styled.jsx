import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 5;

  display: flex;
  align-items: center;

  min-height: ${p => p.theme.space[6] - 4}px;
  padding-top: ${p => p.theme.space[2] * 3}px;
  padding-bottom: ${p => p.theme.space[2] * 3}px;

  background-color: ${p => p.theme.colors.mainBackground};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
`;

export const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactDiv = styled.div`
  margin-left: ${p => p.theme.space[4] + 4}px;
`;

export const Logo = styled.div`
  margin-right: ${p => p.theme.space[7] - 20}px;
  @media screen and (min-width: 768px) and (max-width: 868px) {
    margin-right: ${p => p.theme.space[2] * 6}px;
  }
  font-family: ${p => p.theme.fonts.logo};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
`;

export const HeaderLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.02em;

  color: ${p => p.theme.colors.mainText};

  &.active {
    color: ${p => p.theme.colors.accent};
     font-weight: ${p => p.theme.fontWeights.bold};
  }
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[5] - 2}px;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hover};
  }
  }
`;

export const ContactLink = styled.a`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.02em;

  color: ${p => p.theme.colors.secondaryText};

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[5] - 2}px;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 20%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0d0c1d;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

// background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};

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

export const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  padding: 2rem;

  background-color: #fff3f2;
  text-align: left;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  a {
    padding: 2rem 0;

    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: #0d0c1d;

    transition: color 0.3s linear;

    @media screen and (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &.active {
      color: #8861ff;
    }
  }
`;
