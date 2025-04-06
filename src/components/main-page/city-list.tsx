import { useAppDispatch, useAppSelector} from '../hooks';
import { changeCity } from '../store/action';
import { City } from '../../types/offers-preview';
import CityItem from './city-item';
import { useMemo } from 'react';


type CityListProp = {
  cities:City[];
}

const CityList = ({cities}:CityListProp):JSX.Element => {

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const cityClickHandlers = useMemo(() => {
    const handlers: Record<string, () => void> = {};
    cities.forEach((city) => {
      handlers[city.name] = () => dispatch(changeCity(city.name));
    });
    return handlers;
  },[cities, dispatch]);

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <CityItem city={city} key={city.name} isActive={activeCity === city.name} onClick={cityClickHandlers[city.name]} />
        ))}
      </ul>
    </section>

  );
};

export default CityList;
