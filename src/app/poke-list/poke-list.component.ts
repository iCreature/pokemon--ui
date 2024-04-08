import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private service: PokeapiService) {}

  PokemonList: any=[];
  detailId: any; // variable to hold the detail id

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.getPokemoneList().subscribe(data => {
      this.PokemonList = data;
    });
  }

  showDetails(id: any) {
    this.detailId = id; // set the detail id when the button is clicked
  }

  getImageUrl(id: any) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
