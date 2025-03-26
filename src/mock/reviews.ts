import { Review } from '../types/reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const Reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'b65ddfd7-b943-4a90-9c9d-bd099cd6b62a',
    date: '2023-07-08T14:16:56.569Z',
    user: {
      name: 'Lolla Connor',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'I really love this place!',
    rating: 5
  },
  {
    id: 'c65ddgd6-b555-4a90-9c9d-bd099cd6b62a',
    date: '2021-05-08T17:16:56.469Z',
    user: {
      name: 'Lolik Black',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    comment: 'Norm.',
    rating: 3
  },
  {
    id: 'b25fffs2-b941-2a90-9s9b-bd099cd6b62a',
    date: '2021-05-08T17:16:56.469Z',
    user: {
      name: 'Jacob Cullen',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'I will defenetly come back here charmingly!',
    rating: 5
  },
];
