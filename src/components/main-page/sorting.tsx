import { useState, KeyboardEvent } from 'react';
import { SortingMap } from '../../const/const-sort';
import { Sort } from '../../types/sort';
import { useAppSelector,useAppDispatch } from '../hooks';
import { changeSort } from '../store/action';


const Sorting = ():JSX.Element => {
  const dispatch = useAppDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const activeSort = useAppSelector((state) => state.sort);

  const onChange = (newSort:Sort) => dispatch(changeSort(newSort));

  function handleKeyDown(evt: KeyboardEvent) {
    if(evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleSortingClick (type:Sort) {
    onChange(type);
    setIsOpened(false);
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  return (
    <form className="places__sorting" action="#" method="get" onKeyDown={handleKeyDown}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleTypeClick}>
        {SortingMap[activeSort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.entries(SortingMap).map(([key, type]) => (
          <li
            key={key}
            className={`places__option ${activeSort === key ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() =>handleSortingClick(key as Sort)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
};
export default Sorting;
