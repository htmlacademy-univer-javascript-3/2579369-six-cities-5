import ReviewItem from './review-item';
import { Reviews } from '../../mock/reviews';
import ReviewForm from '../review-form/review-form';

const ReviewsList = (): JSX.Element => {
  const reviewsSorted = [...Reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{Reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsSorted.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
};

export default ReviewsList;
