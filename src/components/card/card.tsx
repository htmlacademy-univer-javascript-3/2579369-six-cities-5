import { Link, useNavigate } from 'react-router-dom';
import { OfferPreview } from '../../types/offers-preview';
import { getRatingWidth } from '../../utils/cards';
import { getOfferPath } from '../../utils/common';
import { AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AppRoute } from '../../const/const';
import { updateFavorites } from '../store/api-action';


type CardProps = {
  offer: OfferPreview;
  block: string;
  onCardHover?: (offerId: OfferPreview['id'] | null) => void;

}

const Card = ({offer, block, onCardHover}: CardProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {isPremium, previewImage, id, price, rating, title, type, isFavorite } = offer;
  const cardSize = block === 'favorites' ? {width: 150, height: 110} : {width: 260, height: 200};
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(updateFavorites({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
  };

  return(
    <article
      className={`${block}__card place-card`}
      onMouseEnter={() => onCardHover?.(id)}
      onMouseLeave={() => onCardHover?.(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={getOfferPath(id)}>
          <img className="place-card__image" src={previewImage} width={cardSize.width} height={cardSize.height} alt={title}></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{block === 'favorites' ? 'In bookmark' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferPath(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
export default Card;
