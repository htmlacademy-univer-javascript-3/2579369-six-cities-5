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
import Spinner from '../spinner/spinner';


const OfferPage = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeCity = useAppSelector((state) => state.city);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const cityInfotmation = Cities.find((city) => city.name === activeCity) || Cities[0];
  const user = useAppSelector((state) => state.user);

  const{id} = useParams<{id:string}>();
  const [, setActiveCard] = useState<OfferPreview['id'] | null>(null);

  const isIdValid = (offerId: string): boolean => {
    const idRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return idRegex.test(offerId);
  };

  useEffect(() => {
    if(id && isIdValid(id)){
      dispatch(fetchOfferId(id));
      dispatch(fetchNearOffers(id));
      dispatch(fetchReviews(id));
    }
  },[dispatch, id]);

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const currentReviews = useAppSelector((state) => state.currentReviews) ?? [];
  const allNearOffers = useAppSelector((state) => state.nearOffers);
  const favoritesOffers = useAppSelector((state) => state.favorites);

  const nearOffers = useMemo(() => {
    if (!currentOffer) {
      return [];
    }

    return allNearOffers
      .map((offer) => ({
        ...offer,
        distance: getDistance(
          currentOffer.location.latitude,
          currentOffer.location.longitude,
          offer.location.latitude,
          offer.location.longitude
        )
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  }, [currentOffer, allNearOffers]);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    if(currentOffer){
      dispatch(updateFavorites({offerId: currentOffer.id, status: currentOffer.isFavorite ? 0 : 1}));
    }

  };

  if(!currentOffer){
    return(
      <Spinner/>
    );
  }
  return(

    <div className="page">
      {authorizationStatus === AuthorizationStatus.Auth
        ? <HeaderAuth user={user} favorites={favoritesOffers}/>
        : <HeaderNoAuth/>}
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer && (
                <div className="offer__gallery">
                  <OfferImgList offer={currentOffer} />
                </div>
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className={`offer__bookmark-button button ${currentOffer.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button" onClick={handleFavoriteClick}>
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  {currentOffer.rating !== undefined && (
                    <span style={{width: getRatingWidth(currentOffer.rating)}}></span>
                  )}
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${currentOffer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${currentOffer.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {currentOffer && (
                  <OfferInsideList offer={currentOffer}/>
                )}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentReviews.length}</span></h2>
                <ul className="reviews__list">
                  {currentReviews && (
                    <ReviewsList reviews={sortReviews(Array.isArray(currentReviews) ? currentReviews : [])} />
                  )}
                </ul>
                {(authorizationStatus === AuthorizationStatus.Auth) && (
                  <ReviewForm offerId={currentOffer.id} />
                )}
              </section>
            </div>
          </div>
          {currentOffer && (
            <section className="offer__map map">
              <Map city={cityInfotmation} offers={[currentOffer, ...nearOffers]} activeCardId={currentOffer.id} />
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
