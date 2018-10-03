import {createSelector} from '@ngrx/store';
import {AppState} from './reducers';


export const selectRecipesState = (state: AppState) => state.recipes;

export const recipesSelector = createSelector(
  selectRecipesState,
  recipes => recipes.recipes
);
