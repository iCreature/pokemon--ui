import { Component , OnInit} from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private service: PokeapiService) {}

  PokemonList!: any[];

  ngOnInit(): void {
      this.getList();
  }

  getList() {
    this.service.getPokemoneList().subscribe(data=>{
      this.PokemonList=data;
    });
  }

  getImageUrl(id: any) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}
