import {Action} from '@ngrx/store';
import {Recipe} from './recipes.service';

export enum RecipesActionTypes {
  LoadRecipes = '[Recipes] Load Recipes'
}

export class LoadRecipes implements Action {
  readonly type = RecipesActionTypes.LoadRecipes;

  constructor(public payload: { recipes: Recipe[] }) {
  }
}

export type RecipesActions = LoadRecipes;
