import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../../const/const';
import { OfferPreview } from '../../types/offers-preview';
import { Sort } from '../../types/sort';
import { AuthorizationStatus } from '../../const/const';
import { UserData } from '../../types/user-data';


export const changeCity = createAction<CityName>('changeCity');
export const fillingOffers = createAction<OfferPreview[]>('fillingOffers');
export const changeSort = createAction<Sort>('changeSort');

export const loadOffers = createAction<OfferPreview[]>('loadOffers');
export const loadOfferById = createAction<OfferPreview>('loadOfferById');
export const requireAuthorization = createAction<AuthorizationStatus>('requiredAuthorization');
export const setError = createAction<string | null>('setErrors');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const setUser = createAction<UserData | null>('setUser');
