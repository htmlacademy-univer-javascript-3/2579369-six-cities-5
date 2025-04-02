import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type { State, AppDispatch } from '../../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useeAppSelector: TypedUseSelectorHook<State> = useSelector;
