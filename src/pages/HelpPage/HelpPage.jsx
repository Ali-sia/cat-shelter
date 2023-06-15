import HelpPagePhoto from '../../assets/images/HelpPagePhoto.jpg';
import {
  HelpContainer,
  ImageContainer,
  InfoContainer,
  Title,
  Link,
} from './HelpPage.styled';
import { ContainerWidth } from '../../components/App/App.styled';

const HelpPage = () => {
  return (
    <ContainerWidth>
      <HelpContainer>
        <ImageContainer>
          <img src={HelpPagePhoto} alt="cute cat to attract people" />
        </ImageContainer>
        <InfoContainer>
          <Title>Допомогти котикам</Title>
          <Link>Посилання на банку</Link>
          <Link>.......................................................</Link>
        </InfoContainer>
      </HelpContainer>
    </ContainerWidth>
  );
};

export default HelpPage;
