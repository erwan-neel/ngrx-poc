import {Component, OnInit} from '@angular/core';
import {Recipe, RecipesService} from './recipes.service';
import {noop, Observable} from 'rxjs';
import {AppState} from './reducers';
import {select, Store} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';
import {LoadRecipes} from './recipes.actions';
import {recipesSelector} from './recipes.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private recipesService: RecipesService, private _store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.recipes$ = this._store
      .pipe(
        select(recipesSelector)
      );
  }

  loadRecipesBtn() {
    this.recipesService.fetchRecipes()
      .pipe(
        tap(recipes => {
          console.log(recipes);
          this._store.dispatch(new LoadRecipes({recipes}));
        })
      )
      .subscribe(
        noop,
        () => alert('Impossible de charger les recettes, le serveur est surement KO')
      );
  }
}
