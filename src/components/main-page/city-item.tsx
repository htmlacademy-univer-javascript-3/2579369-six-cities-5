import { City } from '../../types/offers-preview';
import { Link } from 'react-router-dom';

type CityItemProp ={
  city:City;
  isActive: boolean;
  onClick:() => void;
}

const CityItem = ({city, isActive, onClick}:CityItemProp) => {

  const onCityChangeHandler = () => {
    onClick();
  };

  return(
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to="#"
        onClick={onCityChangeHandler}
      >
        <span>{city.name}</span>
      </Link>
    </li>

  );
};

export default CityItem;


