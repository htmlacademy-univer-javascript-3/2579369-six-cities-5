import { useAppSelector} from '../hooks';
import { City } from '../../types/offers-preview';
import CityItem from './city-item';


type CityListProp = {
  cities:City[];
}

const CityList = ({cities}:CityListProp):JSX.Element => {

  const activeCity = useAppSelector((state) => state.city);

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <CityItem city={city} key={city.name} isActive={activeCity === city.name} />
        ))}
      </ul>
    </section>

  );
};

export default CityList;
