import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-menu-foods',
  templateUrl: './menu-foods.component.html',
  styleUrls: ['./menu-foods.component.scss']
})
export class MenuFoodsComponent implements OnInit {

  foods: Food[] = [];

  constructor(private _fService: FoodService, private _router: Router) { }

  ngOnInit(): void {
    this._fService.getFoods().subscribe(data => {
      this.foods = data as Food[];
    })
  }

}
