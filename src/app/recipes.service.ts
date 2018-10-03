import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get('/api/recipes') as Observable<Recipe[]>;
  }
}

export interface Recipe {
  id: String;
  name: String;
  author: String;
}
