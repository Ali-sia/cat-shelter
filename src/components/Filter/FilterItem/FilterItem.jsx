import { useState, useEffect } from 'react';

import { FilterName, Label, Item } from './FilterItem.styled';

const FilterItem = ({
  filterName,
  filterFields,
  chosenFields,
  setChosenFields,
}) => {
  const [selectAll, setSelectAll] = useState(true);

  useEffect(() => {
    if (selectAll) setChosenFields(filterFields.ALL.split(','));
  }, [filterFields.ALL, selectAll, setChosenFields]);

  const handleChange = event => {
    const { value, checked } = event.target;

    if (value === 'all') {
      setChosenFields(checked ? filterFields.ALL.split(',') : []);
      setSelectAll(checked);
    } else {
      const updatedSelectedColors = checked
        ? [...chosenFields, value]
        : chosenFields.filter(item => item !== value);

      setChosenFields(updatedSelectedColors);
      setSelectAll(
        updatedSelectedColors.length === filterFields.ALL.split(',').length
      );
    }
  };

  const filterArray = filterFields.ALL.split(',');

  return (
    <>
      <FilterName>{filterName}</FilterName>
      <Item>
        <input
          type="checkbox"
          id="select-all"
          name="select-all"
          value="all"
          checked={selectAll}
          onChange={handleChange}
        />
        <Label htmlFor="select-all">Всі</Label>
      </Item>
      {filterArray.map(item => (
        <Item key={item}>
          <input
            type="checkbox"
            id={item}
            name={item}
            value={item}
            checked={chosenFields.includes(item)}
            onChange={handleChange}
          />
          <Label htmlFor={item}>{item}</Label>
        </Item>
      ))}
    </>
  );
};

export default FilterItem;
