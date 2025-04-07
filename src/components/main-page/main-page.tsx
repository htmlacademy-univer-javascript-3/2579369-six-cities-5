import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import Cards from '../cards-list/cards-list';
import { OfferPreview } from '../../types/offers-preview';
import { addPluralEnding } from '../../utils/common';
import { AppRoute} from '../../const/const';
import { useState } from 'react';
import Map from '../map/map';
import CityList from './city-list';
import { Cities } from '../../mock/cities';
import { useAppSelector } from '../hooks';
import { offersPreview } from '../../mock/offers-preview';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { fillingOffers } from '../store/action';


const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fillingOffers(offersPreview));
  }, [dispatch]);

  const activeCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const filteredOffers = allOffers.filter((offer) => offer.city.name === activeCity);
  const allFavoritesOffers = allOffers.filter((offer) => offer.isFavorite);
  const cityInfotmation = Cities.find((city) => city.name === activeCity) || Cities[0];

  const [activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={`${AppRoute.Favorites}`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{allFavoritesOffers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={Cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} place{addPluralEnding(filteredOffers.length)} to stay in Amsterdam</b>
              {/* <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form> */}
              <div className="cities__places-list places__list tabs__content">
                <Cards offers = {filteredOffers} setActiveCard={setActiveCard}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city= {cityInfotmation} offers={filteredOffers} activeCardId={activeCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

};
export default MainPage;
