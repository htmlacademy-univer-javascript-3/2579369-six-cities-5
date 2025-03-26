import { OfferPreview } from '../../types/offers-preview';
import Card from '../card/card';
import { useState } from 'react';

type CardsProps = {
  offers: OfferPreview[];
}

const Cards = ({offers}: CardsProps): JSX.Element => {
  const[activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);

  return(
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} block="cities" onCardHover={setActiveCard} />
      ))}
      {activeCard}
    </>
  );
};

export default Cards;
