import ReviewsList from './reviews-list';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import { OfferPreview} from '../../types/offers-preview';
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cards from '../cards-list/cards-list';
import sortReviews from '../../utils/reviews-filter';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Cities } from '../../mock/cities';
import HeaderNoAuth from '../main-page/header-noAuth';
import HeaderAuth from '../main-page/header-auth';
import { getRatingWidth } from '../../utils/cards';
import { fetchOfferId, fetchReviews, fetchNearOffers } from '../store/api-action';
import OfferImgList from './offer-img-list';
import OfferInsideList from './offer-inside-list';
import { getDistance } from '../../utils/offer-page';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { updateFavorites } from '../store/api-action';


const OfferPage = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeCity = useAppSelector((state) => state.city);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const cityInfotmation = Cities.find((city) => city.name === activeCity) || Cities[0];
  const user = useAppSelector((state) => state.user);

  const{id} = useParams<{id:string}>();
  const [, setActiveCard] = useState<OfferPreview['id'] | null>(null);


  useEffect(() => {
    if(id){
      dispatch(fetchOfferId(id));
      dispatch(fetchNearOffers(id));
    }
  },[dispatch, id]);

  useEffect(() => {
    if(id){
      dispatch(fetchReviews(id));
    }
  },[dispatch,id]);

  const сurrentOffer = useAppSelector((state) => state.currentOffer);
  const сurrentReviews = useAppSelector((state) => state.currentReviews) ?? [];
  const allNearOffers = useAppSelector((state) => state.nearOffers);
  const favoritesOffers = useAppSelector((state) => state.favorites);

  const nearOffers = useMemo(() => {
    if (!сurrentOffer) {
      return [];
    }

    return allNearOffers
      .map((offer) => ({
        ...offer,
        distance: getDistance(
          сurrentOffer.location.latitude,
          сurrentOffer.location.longitude,
          offer.location.latitude,
          offer.location.longitude
        )
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  }, [сurrentOffer, allNearOffers]);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    if(сurrentOffer){
      dispatch(updateFavorites({offerId: сurrentOffer.id, status: сurrentOffer?.isFavorite ? 0 : 1}));
    }

  };

  return(

    <div className="page">
      {authorizationStatus === AuthorizationStatus.Auth
        ? <HeaderAuth user={user} favorites={favoritesOffers}/>
        : <HeaderNoAuth/>}
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {сurrentOffer && (
                <div className="offer__gallery">
                  <OfferImgList offer={сurrentOffer} />
                </div>
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {сurrentOffer?.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {сurrentOffer?.title}
                </h1>
                <button className={`offer__bookmark-button button ${сurrentOffer?.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button" onClick={handleFavoriteClick}>
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  {сurrentOffer?.rating !== undefined && (
                    <span style={{width: getRatingWidth(сurrentOffer.rating)}}></span>
                  )}
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{сurrentOffer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {сurrentOffer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${сurrentOffer?.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${сurrentOffer?.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{сurrentOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {сurrentOffer && (
                  <OfferInsideList offer={сurrentOffer}/>
                )}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={сurrentOffer?.host.avatarUrl} width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="offer__user-name">
                    {сurrentOffer?.host.name}
                  </span>
                  {сurrentOffer?.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {сurrentOffer?.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{сurrentReviews.length}</span></h2>
                <ul className="reviews__list">
                  {сurrentReviews && (
                    <ReviewsList reviews={sortReviews(Array.isArray(сurrentReviews) ? сurrentReviews : [])} />
                  )}
                </ul>
                {(authorizationStatus === AuthorizationStatus.Auth) && (
                  <ReviewForm offerId={сurrentOffer!.id} />
                )}
              </section>
            </div>
          </div>
          {сurrentOffer && (
            <section className="offer__map map">
              <Map city={cityInfotmation} offers={[сurrentOffer, ...nearOffers]} activeCardId={сurrentOffer.id} />
            </section>
          )}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Cards offers = {nearOffers} setActiveCard={setActiveCard}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
