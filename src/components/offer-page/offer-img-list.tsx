import { Offer } from '../../types/offer';

type OfferImgListProps = {
  offer: Offer;
}

const OfferImgList = ({offer}: OfferImgListProps): JSX.Element => (
  <>
    {offer.images.map((img) => (
      <div key={img} className="offer__image-wrapper">
        <img className="offer__image" src={img} alt="Photo"></img>
      </div>
    ))}
  </>
);

export default OfferImgList;
