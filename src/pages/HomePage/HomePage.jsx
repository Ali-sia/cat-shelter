import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchCats } from '../../redux/cats/cats.operations';

import HeroSection from '../../components/HeroSection/HeroSection';
import CatsList from '../../components/CatsList/CatsList';

import { ContainerWidth } from '../../components/App/App.styled';
import { CatsContainer, StyledNavLink } from './HomePage.styled';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <ContainerWidth>
        <CatsContainer>
          <CatsList limit={3} />
          <StyledNavLink to="/cats">See more cats</StyledNavLink>
        </CatsContainer>
      </ContainerWidth>
    </>
  );
};

export default HomePage;
