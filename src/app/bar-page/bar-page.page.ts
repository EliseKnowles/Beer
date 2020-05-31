import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.page.html',
  styleUrls: ['./bar-page.page.scss'],
})

export class BarPagePage implements OnInit {

  BeerChoice : any;

  constructor() {

    this.BeerChoice = [
      {title: "Corona", picture: "../../assets/img/beer-corona"},
      {title: "Budweiss", picture: "https://source.unsplash.com/90"},
    ]
   }

  ngOnInit() {}

}
