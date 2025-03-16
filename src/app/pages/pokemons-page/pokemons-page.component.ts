import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../../pokemons/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ISimplePokemon } from '../../pokemons/interfaces/ISimplePokemon';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html'
})
export default class PokemonsPageComponent implements OnInit {

  protected pokemons = signal<ISimplePokemon[]>([]);

  constructor(
    private pokemonsService:PokemonsService,
  ){}


  ngOnInit(): void {
    this.loadPokemons();
  }


  public loadPokemons(page:number = 0){
    this.pokemonsService.loadPage(page)
      .subscribe(p => this.pokemons.set(p));
  }


}
