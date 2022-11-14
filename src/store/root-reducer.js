import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categoriy.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
