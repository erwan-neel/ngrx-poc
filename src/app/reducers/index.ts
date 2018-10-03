import {Action, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {Recipe} from '../recipes.service';
import {RecipesActions, RecipesActionTypes} from '../recipes.actions';

interface RecipesState {
  loaded: boolean;
  recipes: Recipe[];
}

const initialRecipesState: RecipesState = {
  loaded: false,
  recipes: undefined
};

export interface AppState {
  recipes: RecipesState;
}

function recipesReducer(state: RecipesState = initialRecipesState, action: RecipesActions): RecipesState {
  switch (action.type) {
    case RecipesActionTypes.LoadRecipes:
      return {
        loaded: true,
        recipes: action.payload.recipes
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  recipes: recipesReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
