import MainPage from '../main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const/const';

//import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginComponent from '../login-component/login-component';
//import MainEmptyPage from '../main-empty-page/main-empty-page';
//import OfferNotLoggedPage from '../offer-not-logged-page/offer-not-logged-page';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../errorPage/errorPage';

type AppScreenProps = {
  cardsCount: number;
}

const App = ({cardsCount}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage cardsCount={cardsCount}/>}
      />
      <Route
        path={AppRoute.Favorites}
        element ={<FavoritesPage/>}
      />
      <Route
        path={AppRoute.Login}
        element ={<LoginComponent/>}
      />
      <Route
        path={AppRoute.Offer}
        element ={<OfferPage/>}
      />
      <Route
        path="*"
        element={<ErrorPage/>}
      />
    </Routes>
  </BrowserRouter>

);

export default App;
