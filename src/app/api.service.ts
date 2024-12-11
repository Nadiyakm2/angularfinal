import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>('https://dummyjson.com/recipes');  // Replace with your actual API URL
  }

  getRecipe(id: string): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/recipes/1');  // Replace with your actual API URL
  }
}
