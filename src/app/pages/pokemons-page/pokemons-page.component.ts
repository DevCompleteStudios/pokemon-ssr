import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../../pokemons/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html'
})
export default class PokemonsPageComponent implements OnInit {

  constructor(
    private pokemonsService:PokemonsService,
  ){}


  ngOnInit(): void {
    this.loadPokemons();
  }


  public loadPokemons(page:number = 0){
    this.pokemonsService.loadPage(page)
      .subscribe(pokemons => {
        console.log('Xd');
      });
  }


}
