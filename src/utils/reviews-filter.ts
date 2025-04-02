import { Review } from '../types/reviews';

const sortReviews = (reviews: Review[]): Review[] => [...reviews]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 10);

export default sortReviews;
