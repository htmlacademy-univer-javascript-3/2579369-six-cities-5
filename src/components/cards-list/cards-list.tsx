import { OfferPreview } from '../../types/offers-preview';
import Card from '../card/card';

type CardsProps = {
  offers: OfferPreview[];
  setActiveCard: (offerId: OfferPreview['id'] | null) => void;
}

const Cards = ({offers, setActiveCard}: CardsProps): JSX.Element =>

  (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} block="cities" onCardHover={setActiveCard} />
      ))}
    </>
  );
export default Cards;
