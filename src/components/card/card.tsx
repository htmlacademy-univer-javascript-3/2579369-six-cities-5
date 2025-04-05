import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offers-preview';
import { getRatingWidth } from '../../utils/cards';
import { getOfferPath } from '../../utils/common';


type CardProps = {
  offer: OfferPreview;
  block: string;
  onCardHover?: (offerId: OfferPreview['id'] | null) => void;

}

const Card = ({offer, block, onCardHover}: CardProps): JSX.Element => {

  const {isPremium, previewImage, id, price, rating, title, type } = offer;

  const cardSize = block === 'favorites' ? {width: 150, height: 110} : {width: 260, height: 200};


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
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
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
