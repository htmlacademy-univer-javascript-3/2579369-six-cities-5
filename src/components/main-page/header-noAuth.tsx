import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

const HeaderNoAuth = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo/>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to="/login">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default HeaderNoAuth;
