import { useSelector } from 'react-redux';

import { getCats, getIsLoading } from '../../redux/cats/cats.selectors';

import CatItem from './CatItem/CatItem';
import Loader from '../Loader/Loader';
import { List } from './CatsList.styled';
import { ContainerWidth } from '../App/App.styled';

const CatsList = ({ cats = null, limit = null }) => {
  let catsList = useSelector(getCats);
  const isLoading = useSelector(getIsLoading);

  if (cats === null) {
    cats = catsList;
  }

  if (cats.length > 0 && limit !== null) {
    cats = cats.slice(0, limit);
  }

  return (
    <ContainerWidth>
      <List>
        {isLoading && <Loader />}
        {cats.length > 0 &&
          cats.map(cat => {
            return <CatItem key={cat._id} cat={cat} />;
          })}
      </List>
    </ContainerWidth>
  );
};

export default CatsList;
