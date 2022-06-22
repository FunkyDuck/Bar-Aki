import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private readonly BASE_URL = "http://localhost:3000/drinks";

  constructor(private _client: HttpClient) { }

  public sendDrink(drink: Drink) {
    return this._client.post(this.BASE_URL, drink);
  }

  public getDrinks() {
    return this._client.get(this.BASE_URL);
  }
}
