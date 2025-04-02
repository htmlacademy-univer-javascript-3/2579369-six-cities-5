import ReviewItem from './review-item';
import { Review } from '../../types/reviews';
import sortReviews from '../../utils/reviews-filter';

type ReviewsListProp = {
  reviews: Review[];
}

const ReviewsList = ({reviews}: ReviewsListProp): JSX.Element => {
  const reviewsSorted = sortReviews(reviews);

  return(
    <ul className="reviews__list">
      {reviewsSorted.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
