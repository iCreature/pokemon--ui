import { Component , OnInit, Input} from '@angular/core';
import { PokeapiService } from 'src/app/pokeapi.service';


@Component({
  selector: 'app-pokemone-show',
  templateUrl: './pokemone-show.component.html',
  styleUrls: ['./pokemone-show.component.scss']
})
export class PokemoneShowComponent implements OnInit{

  @Input() detailId:any;
  DetailList:any=[];
  
  constructor(private service: PokeapiService) {}

  ngOnInit(): void {
      this.getDetails();
  }

  getDetails() {
    this.service.getDetailed(this.detailId).subscribe(data => {
      this.DetailList = data;
    });
  }


}
