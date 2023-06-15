import { useState } from 'react';
import {
  HeaderLink,
  ContactLink,
  HeaderContainer,
  InnerDiv,
  Logo,
  ContactDiv,
  StyledBurger,
  StyledMenu,
  Backdrop,
} from './Header.styled';
import { Box } from '../../theme/Box';
import { ContainerWidth } from '../App/App.styled';

import useResize from '../useResize';

const Header = () => {
  const { width } = useResize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <ContainerWidth>
        <Box display="flex" alignItems="center">
          <Logo>CatShelter</Logo>
          {width > 767 ? (
            <InnerDiv>
              <div>
                <HeaderLink to="/">Головна</HeaderLink>
                <HeaderLink to="/cats">Котики</HeaderLink>
                <HeaderLink to="/help-shelter">Допомогти</HeaderLink>
              </div>
              <ContactDiv>
                <ContactLink href="mailto:help@shelter.com">
                  help@shelter.com
                </ContactLink>
                <ContactLink href="tel:+380960033171">
                  +380960033171
                </ContactLink>
              </ContactDiv>
            </InnerDiv>
          ) : (
            // <button>меню бургер</button>
            <>
              <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
              </StyledBurger>

              <Backdrop
                open={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              ></Backdrop>
              <StyledMenu open={isOpen}>
                <HeaderLink to="/">Головна</HeaderLink>
                <HeaderLink to="/cats">Котики</HeaderLink>
                <HeaderLink to="/help-shelter">Допомогти</HeaderLink>
              </StyledMenu>
            </>
          )}
        </Box>
      </ContainerWidth>
    </HeaderContainer>
  );
};

export default Header;
