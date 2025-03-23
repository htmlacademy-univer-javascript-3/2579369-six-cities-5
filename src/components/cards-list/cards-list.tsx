import { OffersPreview } from '../../types/offers-preview';
import Card from '../card/card';

type CardsProps = {
  offers: OffersPreview;
}

const Cards = ({offers}: CardsProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <Card key={offer.id} offer={offer} block="cities" />
    ))}
  </>
);

export default Cards;
