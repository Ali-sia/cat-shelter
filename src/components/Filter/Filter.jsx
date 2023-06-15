import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FilterItem from './FilterItem/FilterItem';
import { enums } from '../../constants';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCatsList } from '../../redux/cats/cats.operations';

import { InnerContainer, FilterButton, Title } from './Filter.styled';

import { setStatusFilter } from '../../redux/cats/cats.slice';
import { getFilter } from '../../redux/cats/cats.selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filter = useSelector(getFilter);

  let searchFilter = {
    status: [],
    color: [],
    gender: [],
    location: [],
  };

  if (filter.length > 1) {
    const params = new URLSearchParams(filter);

    for (const param of params) {
      const [key, value] = param;
      searchFilter[key] = value.split(',');
    }
  }

  const [selectedStatus, setSelectedStatus] = useState(searchFilter.status);
  const [selectedColors, setSelectedColors] = useState(searchFilter.color);
  const [selectedGenders, setSelectedGenders] = useState(searchFilter.gender);
  const [selectedLocations, setSelectedLocations] = useState(
    searchFilter.location
  );

  const filtersValue = {
    status: selectedStatus.join(','),
    color: selectedColors.join(','),
    gender: selectedGenders.join(','),
    location: selectedLocations.join(','),
  };

  const searchQuery = `?status=${filtersValue.status}&color=${filtersValue.color}&gender=${filtersValue.gender}&location=${filtersValue.location}`;

  const filterParamsUse = () => {
    navigate({
      pathname: '/cats',
      search: searchQuery,
    });

    dispatch(fetchFilteredCatsList(searchQuery));
    dispatch(setStatusFilter(searchQuery));
  };

  return (
    <InnerContainer>
      <Title>ФІЛЬТР</Title>
      <FilterItem
        filterName={'Статус'}
        filterFields={enums.STATUS_ENUM}
        chosenFields={selectedStatus}
        setChosenFields={setSelectedStatus}
      />
      <FilterItem
        filterName={'Колір'}
        filterFields={enums.COLORS_ENUM}
        chosenFields={selectedColors}
        setChosenFields={setSelectedColors}
      />
      <FilterItem
        filterName={'Стать'}
        filterFields={enums.GENDERS_ENUM}
        chosenFields={selectedGenders}
        setChosenFields={setSelectedGenders}
      />
      <FilterItem
        filterName={'Локація'}
        filterFields={enums.CITY_ENUM}
        chosenFields={selectedLocations}
        setChosenFields={setSelectedLocations}
      />
      <FilterButton onClick={() => filterParamsUse()}>Фільтрувати</FilterButton>
    </InnerContainer>
  );
};

export default Filter;
