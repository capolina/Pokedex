import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  id = 1;
  constructor() { }

  ngOnInit() {
  }

  changedId(event) {
    this.id = event;
  }

}
