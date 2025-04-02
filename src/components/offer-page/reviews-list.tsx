import ReviewItem from './review-item';
import { Review } from '../../types/reviews';

type ReviewsListProp = {
  reviews: Review[];
}

const ReviewsList = ({reviews}: ReviewsListProp): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ))}
  </ul>
);

export default ReviewsList;
