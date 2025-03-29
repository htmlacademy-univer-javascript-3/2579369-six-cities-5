import { OfferPreview } from '../../types/offers-preview';
import Card from '../card/card';
//import { useState } from 'react';

type CardsProps = {
  offers: OfferPreview[];
  setActiveCard: (offerId: OfferPreview['id'] | null) => void;
}

const Cards = ({offers, setActiveCard}: CardsProps): JSX.Element =>
//const[activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);

  (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} block="cities" onCardHover={setActiveCard} />
      ))}
      {/* {activeCard} */}
    </>
  );
export default Cards;
