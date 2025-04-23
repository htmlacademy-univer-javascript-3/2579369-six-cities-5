import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppSelector } from '../hooks';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = (props:PrivateRouteProps): JSX.Element => {
  const {children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
