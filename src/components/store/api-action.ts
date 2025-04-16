import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { saveToken, dropToken } from '../services/token';
import { OfferPreview } from '../../types/offers-preview';
import { Offer } from '../../types/offer';
import {APIRoute, AuthorizationStatus } from '../../const/const';
import { loadOffers, setOffersDataLoadingStatus, requireAuthorization, setUser, loadOfferById } from './action';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferId = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferById',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOfferById(data));
  },

);

export const checkAuthAction = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser(data));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
