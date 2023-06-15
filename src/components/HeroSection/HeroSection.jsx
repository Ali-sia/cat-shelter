import {
  Hero,
  Title,
  Author,
  StyledNavLink,
  InnerDiv,
} from './HeroSection.styled';
import { ContainerWidth } from '../App/App.styled';

const HeroSection = () => {
  return (
    <Hero>
      <ContainerWidth>
        <InnerDiv>
          <Title>У кого є кіт, той може не боятися самотності</Title>
          <Author>©Даніель Дефо</Author>
          <StyledNavLink to="/cats"> ПРИХИСТИТИ </StyledNavLink>
        </InnerDiv>
      </ContainerWidth>
    </Hero>
  );
};

export default HeroSection;
