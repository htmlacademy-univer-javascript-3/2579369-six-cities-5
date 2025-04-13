
import Cards from '../cards-list/cards-list';
import { OfferPreview } from '../../types/offers-preview';
import { addPluralEnding } from '../../utils/common';
import { AuthorizationStatus} from '../../const/const';
import { useState, useMemo } from 'react';
import Map from '../map/map';
import CityList from './city-list';
import { Cities } from '../../mock/cities';
import { useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import Sorting from './sorting';
import sort from '../../utils/sort';
import { fetchOffers } from '../store/api-action';
import Spinner from '../spinner/spinner';
import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-noAuth';


const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  },[dispatch]);

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const activeCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const activeSort = useAppSelector((state) => state.sort);
  const authorizatedStatus = useAppSelector((state) => state.authorizationStatus);
  const filteredOffers = allOffers.filter((offer) => offer.city.name === activeCity);
  const cityInfotmation = Cities.find((city) => city.name === activeCity) || Cities[0];

  const [activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);
  const sortedOffers = useMemo(() => sort[activeSort](filteredOffers), [filteredOffers,activeSort]);

  if(isOffersDataLoading) {
    return(
      <Spinner/>
    );
  }

  return(
    <div className="page page--gray page--main">
      {authorizatedStatus === AuthorizationStatus.Auth
        ? <HeaderAuth/>
        : <HeaderNoAuth/>}

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
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <Cards offers = {sortedOffers} setActiveCard={setActiveCard}/>
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
