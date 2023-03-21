import { Component, OnInit } from '@angular/core';
import {Portfo} from "../models/Portfo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Portfo= new Portfo();
  constructor() { }

  ngOnInit(): void {
    this.home=
      {id: "1", titre: "Iheb Lafi", occupation: "Software Developer", description:"work"}
  }

}
