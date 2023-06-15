import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  fetchCats,
  fetchFilteredCatsList,
} from '../../redux/cats/cats.operations';
import { getCats, getFilter } from '../../redux/cats/cats.selectors';

import CatsList from '../../components/CatsList/CatsList';
import Filter from '../../components/Filter/Filter';

import { ContainerWidth } from '../../components/App/App.styled';
import {
  InnerContainer,
  StyledFilter,
  Backdrop,
  StyledButton,
  StyledButtonClose,
} from './CatsPage.styled';

import useResize from '../../components/useResize';

const CatsPage = () => {
  const dispatch = useDispatch();
  const catsList = useSelector(getCats);
  const filter = useSelector(getFilter);

  const { width } = useResize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (filter.length < 1) {
      dispatch(fetchCats());
    } else {
      dispatch(fetchFilteredCatsList(filter));
    }
  }, [dispatch, filter]);

  return (
    <ContainerWidth>
      <InnerContainer>
        {width > 767 ? (
          <Filter open={isOpen} />
        ) : (
          <>
            <StyledButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
              Фільтр
            </StyledButton>
            <StyledFilter open={isOpen}>
              <StyledButtonClose
                open={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div></div>
              </StyledButtonClose>
              <Filter />
            </StyledFilter>
            <Backdrop
              open={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            ></Backdrop>
          </>
        )}

        <CatsList cats={catsList} />
      </InnerContainer>
    </ContainerWidth>
  );
};

export default CatsPage;
