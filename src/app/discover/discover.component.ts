import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {

  BeerChoice : any; 

  constructor() {

    this.BeerChoice = [
      {title: "Corona", picture: "../../assets/img/beer-corona"},
      {title: "Budweiss", picture: "bleu"},
    ]

  }


  ngOnInit() {}




}
