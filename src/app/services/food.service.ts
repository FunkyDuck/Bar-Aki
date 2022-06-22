import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private readonly BASE_URL = "http://localhost:3000/foods";

  constructor(private _client: HttpClient) { }

  public sendFood(food: Food) {
    return this._client.post(this.BASE_URL, food);
  }

  public getFoods() {
    return this._client.get(this.BASE_URL);
  }
}
