import { Fragment, useState, ChangeEvent, useMemo, FormEvent } from 'react';
import { ratingMap } from '../../const/const';
import { useAppDispatch } from '../hooks';
import { sendReview } from '../store/api-action';
//import { fetchReviews } from '../store/api-action';

type ReviewFormProps = {
  offerId: string;
}

const ReviewForm = ({offerId}: ReviewFormProps) => {

  const [form, setForm] = useState({
    review: '',
    rating: '',
  });

  const isValid = useMemo(() =>form.review.length >= 50 && form.rating !== '',[form.review, form.rating]);
  const [isSending, setIsSending] = useState(false);

  const dispatch = useAppDispatch();

  function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value} = evt.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (offerId && isValid) {
      setIsSending(true);

      dispatch(sendReview({
        offerId,
        comment: {
          comment: form.review,
          rating: Number(form.rating),
        },
      }));
      setIsSending(false);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingMap)
          .reverse()
          .map(([score, title]) => (
            <Fragment key={score}>
              <input className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`} type="radio"
                checked={form.rating === score}
                onChange={handleChange}
                disabled={isSending}
              />
              <label htmlFor={`${score}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={form.review}
        onChange={handleChange}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
