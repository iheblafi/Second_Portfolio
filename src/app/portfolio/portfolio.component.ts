import { Component, OnInit } from '@angular/core';
import {Portfolio} from "../models/Portfolio";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio1: Portfolio= new Portfolio();
  portfolio2: Portfolio= new Portfolio();
  portfolio3: Portfolio= new Portfolio();
  constructor() { }

  ngOnInit(): void {
    this.portfolio1=
      {id: "1", titre: "Baccalauréat \n 2016 ", description:"work"}
    this.portfolio2=
      {id: "1", titre: "Licence Fondamental \n 2020", description:"work"}
    this.portfolio3=
      {id: "1", titre: "Ingénieurie \n 2024", description:"work"}
  }


}
