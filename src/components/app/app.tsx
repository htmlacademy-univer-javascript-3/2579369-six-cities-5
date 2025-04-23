import MainPage from '../main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const/const';

import FavoritesPage from '../favorites-page/favorites-page';
import LoginComponent from '../login-component/login-component';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../errorPage/errorPage';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch} from '../hooks';
import { useEffect } from 'react';
import { checkAuthAction } from '../store/api-action';


const App = (): JSX.Element =>{
  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(checkAuthAction());
  },[dispatch]);

  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element ={
            <PrivateRoute>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element ={<LoginComponent/>}
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element ={<OfferPage/>}
        />
        <Route
          path="*"
          element={<ErrorPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
