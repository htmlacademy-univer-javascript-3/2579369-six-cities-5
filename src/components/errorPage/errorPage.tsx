import {Link} from 'react-router-dom';

const ErrorPage = (): JSX.Element => (
  <div className="page page--favorites-empty">

    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404.Page not found.</b>
            <Link to="/">Go to main page</Link>
          </div>
        </section>
      </div>
    </main>
    <footer className="footer">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </a>
    </footer>
  </div>
);

export default ErrorPage;
