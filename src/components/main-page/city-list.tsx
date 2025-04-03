import { Link } from 'react-router-dom';

type CityListProp = {
  cities:string[];
}

const CityList = ({cities}:CityListProp):JSX.Element => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <Link className="locations__item-link tabs__item" to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default CityList;
