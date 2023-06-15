import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCat } from '../../redux/cats/cats.operations';
import {
  getCurrentCat,
  getFilter,
  getIsLoading,
} from '../../redux/cats/cats.selectors';

import {
  PhotoContainer,
  Image,
  Name,
  Gender,
  Age,
  Status,
  Color,
  Description,
  Location,
  InnerContainer,
  Info,
  Button,
} from './OneCatPage.styled';
import { ContainerWidth } from '../../components/App/App.styled';

import Loader from '../../components/Loader/Loader';

const OneCatPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cat = useSelector(getCurrentCat);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  const { catId } = useParams();

  useEffect(() => {
    dispatch(fetchOneCat(catId));
  }, [catId, dispatch]);

  return (
    <ContainerWidth>
      <Button
        onClick={() => {
          // navigate(-1)
          navigate({
            pathname: '/cats',
            search: filter,
          });
        }}
      >
        Go back
      </Button>
      <InnerContainer>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <PhotoContainer>
              {cat.photo && <Image src={cat.photo} alt="cat avatar" />}
            </PhotoContainer>

            <Info>
              <Name>❤️ {cat.name} ❤️</Name>
              <Color>
                <span>Колір:</span> {cat.color}
              </Color>
              <Gender>
                <span>Стать:</span> {cat.gender}
              </Gender>
              <Age>
                <span>Вік: </span> {cat.age}
              </Age>
              <Status>
                <span>Статус:</span> {cat.status}
              </Status>
              <Description>
                <span>Опис:</span> {cat.description}
              </Description>
              <Location>
                <span>Місцезнаходження:</span> {cat.location}
              </Location>
            </Info>
          </>
        )}
      </InnerContainer>
    </ContainerWidth>
  );
};

export default OneCatPage;
