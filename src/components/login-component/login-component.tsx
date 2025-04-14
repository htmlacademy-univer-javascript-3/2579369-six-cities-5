import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { useRef, FormEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { loginAction } from '../store/api-action';

const LoginComponent = (): JSX.Element => {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }))
        .then((resultAction) => {
          if (loginAction.fulfilled.match(resultAction)) {
            navigate(AppRoute.Main);
          }
        });
    }
  };

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                >
                </input>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  required
                >
                </input>
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                // onClick={() => navigate(AppRoute.Main)}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginComponent;
