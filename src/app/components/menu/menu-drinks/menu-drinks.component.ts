import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from 'src/app/models/drink.model';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.scss']
})
export class MenuDrinksComponent implements OnInit {

  drinks: Drink[] = [];

  constructor(private _dService: DrinkService, private _router: Router) { }

  ngOnInit(): void {
    this._dService.getDrinks().subscribe(data => {
      this.drinks = data as Drink[];
    })
  }

}
