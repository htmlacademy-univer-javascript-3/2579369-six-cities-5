import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import Logo from '../logo/logo';
import { UserData } from '../../types/user-data';
import { OfferPreview } from '../../types/offers-preview';
import { logoutAction } from '../store/api-action';
import { useAppDispatch } from '../hooks';
import { useNavigate } from 'react-router-dom';

type HeaderAuthProps = {
  user: UserData | null;
  favorites: OfferPreview[];
}

const HeaderAuth = ({user, favorites}:HeaderAuthProps): JSX.Element =>{
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return(
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
                  <span className="header__user-name user__name">{user?.email}</span>
                  <span className="header__favorite-count">{favorites.length}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to="/login"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                    navigate(AppRoute.Login);
                  }}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderAuth;
