import { useState, KeyboardEvent } from 'react';
import { SortingMap } from '../../const/const-sort';
import { Sort } from '../../types/sort';

type SortingProps = {
  activeSort: Sort;
  onChange: (newSort: Sort) => void;
}

const Sorting = ({activeSort, onChange}:SortingProps):JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);

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
        {/* <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li> */}
      </ul>
    </form>
  );
};
export default Sorting;
