import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { OfferPreview } from '../../types/offers-preview';
import FavoritiesCard from '../favorites-card/favorities-card';

type FavoritiesProps = {
  offers: OfferPreview[];
}

const getFavoritiesByCity = (favorites: OfferPreview[]) =>
  favorites.reduce<{ [key: string]: OfferPreview[]}>((acc,curr) => {
    const city = curr.city.name;

    if(!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);

    return acc;
  }, {});

const FavoritesPage = ({offers}: FavoritiesProps): JSX.Element => {
  const favoritesByCity = getFavoritiesByCity(offers);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
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
                      {groupedFavorities.map((offer) => (
                        <FavoritiesCard offer={offer} key={offer.id}/>
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
