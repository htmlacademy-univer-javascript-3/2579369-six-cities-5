import { Offer } from '../../types/offer';

type OfferInsideListProps = {
  offer: Offer;
}

const OfferInsideList = ({offer}: OfferInsideListProps): JSX.Element => (
  <ul className="offer__inside-list">
    {offer.goods.map((good) => (
      <li key={good} className="offer__inside-item">
        {good}
      </li>
    ))}
  </ul>
);

export default OfferInsideList;
