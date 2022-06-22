import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayNav() {
    let img = document.getElementById("imgMenu");
    let nav = document.getElementById("subMenu");
    let d = "display";

    this.display = !this.display;
    if(this.display){
      img?.classList.add(d);
      nav?.classList.add(d);
    }else{
      img?.classList.remove(d);
      nav?.classList.remove(d);
    }
    
  }

}
