import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { UserData } from '../../types/user-data';

type FavoritesEmptyPageProps = {
  user: UserData;
}

const FavoritesEmptyPage = ({user}: FavoritesEmptyPageProps): JSX.Element => (
  <div className="page page--favorites-empty">
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
                  <span className="header__user-name user__name">{user.email}</span>
                  <span className="header__favorite-count">0</span>
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

    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
    <footer className="footer">
      <Link className="footer__logo-link" to="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </Link>
    </footer>
  </div>
);

export default FavoritesEmptyPage;
