import { City } from '../../types/offers-preview';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { changeCity } from '../store/action';

type CityItemProp ={
  city:City;
  isActive: boolean;
}

const CityItem = ({city, isActive}:CityItemProp) => {
  const dispatch = useAppDispatch();

  const onCityChangeHandler = () => {
    dispatch(changeCity(city.name));
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


