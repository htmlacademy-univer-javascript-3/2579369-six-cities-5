import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';

type PrivateRouteProps = {
  isAuthorizate: boolean;
  children: JSX.Element;
}

const PrivateRoute = (props:PrivateRouteProps): JSX.Element => {
  const {isAuthorizate, children} = props;

  return (
    isAuthorizate
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
