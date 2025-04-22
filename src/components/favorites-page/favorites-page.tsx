import { Link } from 'react-router-dom';
import Card from '../card/card';
import getFavoritiesByCity from '../../utils/favorities-by-city';
import { useAppSelector } from '../hooks';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import HeaderAuth from '../main-page/header-auth';

const FavoritesPage = (): JSX.Element => {

  const allFavoritesOffers = useAppSelector((state) => state.favorites);
  const user = useAppSelector((state) => state.user);

  const favoritesByCity = getFavoritiesByCity(allFavoritesOffers);

  if(allFavoritesOffers.length === 0) {
    return(
      <FavoritesEmptyPage user={user!}/>
    );
  }
  return (
    <div className="page">
      <HeaderAuth user={user} favorites={allFavoritesOffers}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(
                ([city, groupedFavorities]) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedFavorities.filter((offer) => offer.isFavorite).map((offer) => (

                        <Card offer={offer} key={offer.id} block="favorites"/>
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
        </Link>
      </footer>
    </div>
  );
};
export default FavoritesPage;
