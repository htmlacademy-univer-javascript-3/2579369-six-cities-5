import ReviewsList from './reviews-list';
import ReviewForm from '../review-form/review-form';
import { Reviews } from '../../mock/reviews';
import Map from '../map/map';
import { OfferPreview} from '../../types/offers-preview';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../cards-list/cards-list';
import sortReviews from '../../utils/reviews-filter';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Cities } from '../../mock/cities';
import HeaderAuth from '../main-page/header-auth';
import { getRatingWidth } from '../../utils/cards';
import { fetchOfferId } from '../store/api-action';
import OfferImgList from './offer-img-list';
import OfferInsideList from './offer-inside-list';


const OfferPage = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const activeCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const filteredOffers = allOffers.filter((offer) => offer.city.name === activeCity);
  const cityInfotmation = Cities.find((city) => city.name === activeCity) || Cities[0];
  const allFavoritesOffers = allOffers.filter((offer) => offer.isFavorite);
  const user = useAppSelector((state) => state.user);

  const{id} = useParams<{id:string}>();
  const nearOffers = filteredOffers.filter((offer) => offer.id !== id);
  const [activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);

  useEffect(() => {
    if(id){
      dispatch(fetchOfferId(id));
    }
  },[dispatch, id]);

  const CurrentOffer = useAppSelector((state) => state.currentOffer);

  return(

    <div className="page">
      <HeaderAuth user={user} favorites={allFavoritesOffers}/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {CurrentOffer && (
                <div className="offer__gallery">
                  <OfferImgList offer={CurrentOffer} />
                </div>
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {CurrentOffer?.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {CurrentOffer?.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  {CurrentOffer?.rating !== undefined && (
                    <span style={{width: getRatingWidth(CurrentOffer.rating)}}></span>
                  )}
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{CurrentOffer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {CurrentOffer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${CurrentOffer?.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${CurrentOffer?.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{`&euro;${CurrentOffer?.price}`}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {CurrentOffer && (
                  <OfferInsideList offer={CurrentOffer}/>
                )}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={CurrentOffer?.host.avatarUrl} width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="offer__user-name">
                    {CurrentOffer?.host.name}
                  </span>
                  {CurrentOffer?.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {CurrentOffer?.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{Reviews.length}</span></h2>
                <ul className="reviews__list">
                  <ReviewsList reviews={sortReviews(Reviews)} />
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={cityInfotmation} offers={nearOffers} activeCardId={activeCard}/>
          </section>
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
