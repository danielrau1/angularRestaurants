                          // [3.2a]
import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from '../models/restaurant'; // [3.2a]

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.sass']
})
export class RestCardComponent implements OnInit {
  @Input() restaurant: Restaurant; // [3.2a]

  constructor() { }

  ngOnInit() {
  }

}
