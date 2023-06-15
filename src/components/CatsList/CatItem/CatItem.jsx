import {
  PhotoContainer,
  LinkToCat,
  InfoCard,
  Name,
  Age,
  Gender,
  Status,
  Item,
  Image,
} from './CatItem.styled';

const CatItem = ({ cat }) => {
  return (
    <Item>
      <LinkToCat to={`/cats/${cat._id}`}>
        <InfoCard>
          <PhotoContainer>
            {cat.photo && <Image src={cat.photo} alt="cat avatar" />}
          </PhotoContainer>
          <Name>❤️ {cat.name} ❤️</Name>
          <Gender>
            <span>Стать:</span> {cat.gender}
          </Gender>
          <Age>
            <span>Вік: </span> {cat.age}
          </Age>
          {cat.status === 'domesticated' ? (
            <Status $domesticated></Status>
          ) : (
            <Status></Status>
          )}
        </InfoCard>
      </LinkToCat>
    </Item>
  );
};

export default CatItem;
